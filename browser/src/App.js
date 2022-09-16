import React, { useEffect } from 'react';
import { TopSongsPanel } from './view/components/TopSongs/TopSongsPanel';
import { fetchSpotifyAPI } from '../utils/fetchSpotifyAPI';

export const App = () => {
  let topSongs = [];
  let testArr = [
    { sup: 'nerd', yo: 123 },
    { sup: 'dawg', yo: 39485 },
  ];

  const populateTopSongs = () => {
    fetchSpotifyAPI({
      url: 'http://localhost:8000/top-songs',
      options: {
        method: 'GET',
      },
      success: data => {
        for (const song of data.items) {
          topSongs.push({
            songID: song.id,
            songName: song.name,
            songAlbum: song.album.name,
            songArtists: song.artists,
            songURL: song.external_urls.spotify,
            songImage: song.album.images[0],
          });
        }
      },
      fail: err => console.log('top songs error', err),
    });
  };

  useEffect(() => {
    populateTopSongs();
    console.log('topSongs: ', topSongs);
    console.log('testArr: ', testArr);
  });

  return (
    <div id='container'>
      <h1>Spotify Dashboard</h1>
      <TopSongsPanel songs={topSongs} />
    </div>
  );
};
