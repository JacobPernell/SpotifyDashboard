import React from 'react';
import '../TopWidget.scss';

export const TopArtistsWidget = ({ artist, artistImage, artistURL }) => {
  return (
    <div className='widget-container'>
      <img src={artistImage} alt={artist} className='widget-container__art' />
      <div className='widget-container__info'>
        <a href={artistURL} target='_blank'>
          <strong>{artist}</strong>
        </a>
      </div>
    </div>
  );
};

TopArtistsWidget.defaultProps = {
  albumArt: '',
};
