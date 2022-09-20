import React from 'react';
import './TopArtistsWidget.scss';

export const TopArtistsWidget = ({ artist, artistImage, artistURL }) => {
  return (
    <div className='top-artists-container'>
      <img src={artistImage} alt={artist} className='top-artists-container__artist-art' />
      <div className='top-artists-container__artist-info'>
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
