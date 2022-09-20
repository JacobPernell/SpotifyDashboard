import React, { useEffect, useState } from 'react';
import { TopSongsPanel } from './view/components/TopSongs/TopSongsPanel';
import { fetchSpotifyAPI } from '../utils/fetchSpotifyAPI';

export const App = () => {
  const [topSongsData, setTopSongsData] = useState([]);

  useEffect(() => {
    fetchSpotifyAPI({
      url: 'http://localhost:8000/top-songs',
      options: {
        method: 'GET',
      },
      success: setTopSongsData,
      fail: console.error,
    });
  }, []);

  return (
    <div id='container'>
      <h1>Spotify Dashboard</h1>
      <TopSongsPanel songs={topSongsData} />
    </div>
  );
};
