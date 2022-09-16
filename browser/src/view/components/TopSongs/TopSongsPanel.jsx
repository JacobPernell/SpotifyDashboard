import React, { useEffect } from 'react';
import './TopSongsPanel.scss';
import { TopSongsWidget } from './TopSongsWidget';

export const TopSongsPanel = ({ songs }) => {
  // console.log(songs);
  const generateTopSongsWidgets = () => {
    songs.forEach(song => {
      console.log(song);
      return (
        <TopSongsWidget song={song.songName} albumTitle={song.songAlbum} artist={song.artists} />
      );
    });
  };

  useEffect(() => {
    generateTopSongsWidgets();
  });

  return (
    <div id='top-songs-container'>
      <span id='top-songs-title'>Top 10 Songs</span>
      {/* {generateTopSongsWidgets()} */}
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
