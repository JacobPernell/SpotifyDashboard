import React from 'react';
import './TopWidget.scss';

export const TopArtistsWidget = ({ artist, artistImage, artistURL }) => {
  return (
    <div className='top-widget-container'>
      <img src={artistImage} alt={artist} className='top-widget-container__art' />
      <div className='top-widget-container__artist-info'>
        <span>
          <strong>{artist}</strong>
        </span>
      </div>
    </div>
  );
};

TopArtistsWidget.defaultProps = {
  albumArt: '',
};
