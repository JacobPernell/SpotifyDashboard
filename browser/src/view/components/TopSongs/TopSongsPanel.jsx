import React from 'react';
import '../TopPanel.scss';
import { TopSongsWidget } from './TopSongsWidget';

export const TopSongsPanel = ({ songs }) => {
  return (
    <div className='panel-container'>
      <h1 className='panel-container__title'>Top Songs</h1>
      {songs.map(song => {
        return (
          <TopSongsWidget
            song={song.songName}
            albumTitle={song.songAlbum}
            albumImage={song.songImage}
            artist={song.artists}
            songURL={song.songURL}
            key={song.songID}
          />
        );
      })}
    </div>
  );
};
