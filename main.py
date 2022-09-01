from fastapi import FastAPI

import httpx

app = FastAPI()

CLIENT_ID = ''
redirect_uri = 'http://localhost:8080/callback'
scope = 'user-read-private user-read-email'


@app.get("/api/login")
async def login():
    try:
        params = {'response_type': 'code', 'client_id': CLIENT_ID, 'scope': scope, 'redirect_uri': redirect_uri, 'code_challenge_method': 'S256' }
        r = httpx.get('https://accounts.spotify.com/authorize?', params=params)
        return r.json()
    except:
        print("HTTPX error: ", r)
        print(r.request)
