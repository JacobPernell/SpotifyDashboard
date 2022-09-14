import React from 'react';
import './TopSongsWidget.scss';

export const TopSongsWidget = ({ song, albumArt, albumTitle, artist }) => {
  return (
    <div className='top-songs-container'>
      <div className='top-songs-container__album-art'></div>
      <div className='top-songs-container__album-info'>
        <span>
          <strong>{song}</strong>
        </span>
        <span>{albumTitle}</span>
        <span>{artist}</span>
      </div>
    </div>
  );
};

TopSongsWidget.defaultProps = {
  albumArt: '',
};
