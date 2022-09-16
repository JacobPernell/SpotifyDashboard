import base64

from fastapi import FastAPI, Request
from fastapi.responses import RedirectResponse
from fastapi.middleware.cors import CORSMiddleware
from urllib.parse import urlencode

import httpx

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

spotify_auth_url = 'https://accounts.spotify.com/authorize?'
response_type = 'code'
CLIENT_ID = input("Spotify CLIENT ID: ")
CLIENT_SECRET = input("Spotify CLIENT SECRET: ")
scope = 'user-read-private user-read-email user-top-read user-library-read'
redirect_uri = 'http://127.0.0.1:8000/callback'
code_challenge_method = 'S256'
params = {'response_type': response_type, 'client_id': CLIENT_ID, 'scope': scope, 'redirect_uri': redirect_uri, 'code_challenge_method': code_challenge_method }
full_auth_url = spotify_auth_url + urlencode(params)

spotify_request_access_token_url = 'https://accounts.spotify.com/api/token'

cookies = httpx.Cookies()
print(cookies)


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
        cookies.set('access_token', response['access_token'])
        cookies.set('refresh_token', response['refresh_token'])
        print(cookies)
        return response
    except:
        params = request.query_params
        error_params = {"error": params['error'], "state": params['state']}
        print('error with /callback', error_params)


# Broken, currently returns: {"error":"invalid_grant","error_description":"Invalid refresh token"}
@app.get("/refresh_token")
async def request_refresh_token(request: Request):
    try:
        params = request.query_params
        b64_client_id_secret = base64.urlsafe_b64encode((CLIENT_ID + ":" + CLIENT_SECRET).encode()).decode()
        headers = {"Authorization": f"Basic {b64_client_id_secret}", "Content-Type": "application/x-www-form-urlencoded"}
        payload = {"grant_type": "refresh_token", "refresh_token": cookies['refresh_token']}
        r = httpx.post(spotify_request_access_token_url, data=payload, headers=headers)
        response = r.json()
        return response
    except:
        params = request.query_params
        error_params = {"error": params['error'], "state": params['state']}
        print('error with /callback', error_params)


@app.get("/top-artists")
async def get_top_artists():
    try:
        headers = {"Authorization": f"Bearer {cookies['access_token']}"}
        r = httpx.get("https://api.spotify.com/v1/me/top/artists", headers=headers)
        response = r.json()
        return response
    except:
        return 'Error getting top artists -- did you auth with /api/login first?'

