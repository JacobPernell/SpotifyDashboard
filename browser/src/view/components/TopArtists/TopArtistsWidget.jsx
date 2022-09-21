import React from 'react';
import '../TopWidget.scss';

export const TopArtistsWidget = ({ artist, artistImage, artistURL, index }) => {
  return (
    <div className='widget-container'>
      <div className='widget-container__number'>{index}</div>
      <a href={artistURL} target='_blank'>
        <img src={artistImage} alt={artist} className='widget-container__art' />
      </a>
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
