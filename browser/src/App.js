import React, { useEffect, useState } from 'react';
import { TopSongsPanel } from './view/components/TopSongs/TopSongsPanel';
import { TopArtistsPanel } from './view/components/TopArtists/TopArtistsPanel';
import { fetchSpotifyAPI } from '../utils/fetchSpotifyAPI';

export const App = () => {
  const [topSongsData, setTopSongsData] = useState([]);
  const [topArtistsData, setTopArtistsData] = useState([]);

  useEffect(() => {
    fetchSpotifyAPI({
      url: 'http://localhost:8000/top-songs',
      options: {
        method: 'GET',
      },
      success: setTopSongsData,
      fail: console.error,
    });
    fetchSpotifyAPI({
      url: 'http://localhost:8000/top-artists',
      options: {
        method: 'GET',
      },
      success: setTopArtistsData,
      fail: console.error,
    });
  }, []);

  return (
    <div id='container'>
      <div id='nav-bar'>
        <h1>Spotify Dashboard</h1>
        <div id='nav-bar__username'>Username</div>
      </div>
      <div id='panels'>
        <TopSongsPanel songs={topSongsData} />
        <TopArtistsPanel artists={topArtistsData} />
      </div>
    </div>
  );
};
