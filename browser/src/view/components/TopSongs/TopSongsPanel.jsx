import React from 'react';
import './TopSongsPanel.scss';
import { TopSongsWidget } from './TopSongsWidget';

export const TopSongsPanel = ({ songs }) => {
  return (
    <div id='top-songs-container'>
      <span id='top-songs-title'>Top 10 Songs</span>
      {songs.map(song => {
        return (
          <TopSongsWidget
            song={song.songName}
            albumTitle={song.songAlbum}
            albumImage={song.songImage}
            artist={song.artists}
            key={song.songID}
          />
        );
      })}
    </div>
  );
};
