import React from 'react';
import '../TopWidget.scss';

export const TopSongsWidget = ({ song, albumImage, albumTitle, artist, songURL, index }) => {
  return (
    <div className='widget-container'>
      <div className='widget-container__number'>{index}</div>
      <a href={songURL} target='_blank'>
        <img src={albumImage} alt={artist} className='widget-container__art' />
      </a>
      <div className='widget-container__info'>
        <a href={songURL} target='_blank'>
          <strong>{song}</strong>
        </a>
        <span>{albumTitle}</span>
        <span>{artist}</span>
      </div>
    </div>
  );
};

TopSongsWidget.defaultProps = {
  albumArt: '',
};
