import React from 'react';
import '../TopPanel.scss';
import { TopArtistsWidget } from './TopArtistsWidget';

export const TopArtistsPanel = ({ artists }) => {
  return (
    <div className='panel-container'>
      <h1 className='panel-container__title'>Top Artists</h1>
      {artists.map(artist => {
        return (
          <TopArtistsWidget
            artist={artist.artistName}
            artistImage={artist.artistImage}
            artistURL={artist.artistURL}
            key={artist.artistID}
          />
        );
      })}
    </div>
  );
};
