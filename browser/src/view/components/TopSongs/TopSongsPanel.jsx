import React from 'react';
import './TopSongsPanel.scss';
import { TopSongsWidget } from './TopSongsWidget';

export const TopSongsPanel = () => {
  return (
    <div id='top-songs-container'>
      <span id='top-songs-title'>Top 10 Songs</span>
      <TopSongsWidget
        song='The best song is cool yay'
        albumTitle='Album title'
        artist='Artistsldfkj'
      />
      <TopSongsWidget
        song='jimmy gon giv it to ya'
        albumTitle='i am frog'
        artist='Jimmy Ribbitzzz'
      />
      <TopSongsWidget song='Slice that Beat' albumTitle='Heat of the Kitchen' artist='Bobby Sl4y' />
    </div>
  );
};
