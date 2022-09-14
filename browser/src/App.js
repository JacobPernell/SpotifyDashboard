import React, { useEffect } from 'react';
import { TopSongsPanel } from './view/components/TopSongs/TopSongsPanel';
import { fetchSpotifyAPI } from '../utils/fetchSpotifyAPI';

export const App = () => {
  const populateTopSongs = () => {
    fetchSpotifyAPI(
      'http://localhost:8000/me',
      { method: 'GET' },
      () => console.log('top songs success'),
      () => console.log('top songs error')
    );
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
