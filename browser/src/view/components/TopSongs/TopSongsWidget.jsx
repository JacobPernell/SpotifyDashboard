import React from 'react';
import './TopSongsWidget.scss';

export const TopSongsWidget = ({ song, albumImage, albumTitle, artist }) => {
  return (
    <div className='top-songs-container'>
      <img src={albumImage} alt={artist} className='top-songs-container__album-art' />
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
