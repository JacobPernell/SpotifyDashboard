import base64

from fastapi import FastAPI, Request
from fastapi.responses import RedirectResponse
from urllib.parse import urlencode

import httpx

app = FastAPI()

spotify_auth_url = 'https://accounts.spotify.com/authorize?'
response_type = 'code'
CLIENT_ID = ''
CLIENT_SECRET = ''
scope = 'user-read-private user-read-email'
redirect_uri = 'http://127.0.0.1:8000/callback'
code_challenge_method = 'S256'
params = {'response_type': response_type, 'client_id': CLIENT_ID, 'scope': scope, 'redirect_uri': redirect_uri, 'code_challenge_method': code_challenge_method }
full_auth_url = spotify_auth_url + urlencode(params)

spotify_request_access_token_url = 'https://accounts.spotify.com/api/token'
access_token = ''
refresh_token = ''


@app.get("/api/login")
async def request_login():
    try:
        return RedirectResponse(full_auth_url)
    except:
        print("Error with request_login(): ", full_auth_url)


@app.get("/callback")
async def callback(request: Request):
    try:
        params = request.query_params
        callback_params = {"grant_type": "authorization_code", "code": params['code'], "redirect_uri": redirect_uri}
        b64_client_id_secret = base64.urlsafe_b64encode((CLIENT_ID + ":" + CLIENT_SECRET).encode()).decode()
        headers = {"Authorization": f"Basic {b64_client_id_secret}", "Content-Type": "application/x-www-form-urlencoded"}
        r = httpx.post(spotify_request_access_token_url, data=callback_params, headers=headers)
        response = r.json()
        ACCESS_TOKEN = response['access_token']
        REFRESH_TOKEN = response['refresh_token']
        return response
    except:
        params = request.query_params
        error_params = {"error": params['error'], "state": params['state']}
        print('error with /callback', error_params)


# Broken, currently returns: {"error":"invalid_grant","error_description":"Invalid refresh token"}
@app.get("/refresh_token")
async def refresh_token(request: Request):
    try:
        params = request.query_params
        b64_client_id_secret = base64.urlsafe_b64encode((CLIENT_ID + ":" + CLIENT_SECRET).encode()).decode()
        headers = {"Authorization": f"Basic {b64_client_id_secret}", "Content-Type": "application/x-www-form-urlencoded"}
        payload = {"grant_type": "refresh_token", "refresh_token": refresh_token}
        r = httpx.post(spotify_request_access_token_url, data=payload, headers=headers)
        response = r.json()
        return response
    except:
        params = request.query_params
        error_params = {"error": params['error'], "state": params['state']}
        print('error with /callback', error_params)
