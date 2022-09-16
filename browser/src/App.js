import React, { useEffect } from 'react';
import { TopSongsPanel } from './view/components/TopSongs/TopSongsPanel';
import { fetchSpotifyAPI } from '../utils/fetchSpotifyAPI';

export const App = () => {
  const populateTopSongs = () => {
    fetchSpotifyAPI({
      url: 'http://localhost:8000/top-artists',
      options: {
        method: 'GET',
      },
      success: data => console.log('top songs success', data),
      fail: err => console.log('top songs error', err),
    });
  };

  useEffect(() => {
    populateTopSongs();
  });

  return (
    <div id='container'>
      <h1>Spotify Dashboard</h1>
      <TopSongsPanel />
    </div>
  );
};
