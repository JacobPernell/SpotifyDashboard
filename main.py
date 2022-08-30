from typing import Union

from fastapi import FastAPI

import httpx

app = FastAPI()

CLIENT_ID = input("Enter your Spotify Client ID: ")
redirect_uri = 'http://localhost:8000/callback'
scope = 'user-read-private user-read-email'


@app.get("/")
def read_root():
    params = {'response_type': 'code', 'client_id': CLIENT_ID, 'scope': 'scope', 'redirect_uri': 'redirect_uri'}
    r = httpx.get('https://accounts.spotify.com/authorize?', params=params)
    print(r)
    return r
