import React from 'react';
import './TopPanel.scss';
import { TopSongsWidget } from '../PanelWidget/TopSongsWidget';

export const TopSongsPanel = ({ songs }) => {
  return (
    <div id='top-panel-container'>
      <h1 id='top-panel-title'>Top 10 Songs</h1>
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
