import React from 'react';
import './TopWidget.scss';

export const TopSongsWidget = ({ song, albumImage, albumTitle, artist }) => {
  return (
    <div className='top-widget-container'>
      <img src={albumImage} alt={artist} className='top-widget-container__art' />
      <div className='top-widget-container__album-info'>
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
