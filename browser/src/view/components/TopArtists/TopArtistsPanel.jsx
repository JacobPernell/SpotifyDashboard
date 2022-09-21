import React from 'react';
import '../TopPanel.scss';
import { TopArtistsWidget } from './TopArtistsWidget';

export const TopArtistsPanel = ({ artists }) => {
  return (
    <div className='panel-container'>
      <h1 className='panel-container__title'>Top Artists</h1>
      {artists.map((artist, index) => {
        let formattedIndexNumber = (index + 1).toLocaleString('en-US', {
          minimumIntegerDigits: 2,
          useGrouping: false,
        });

        return (
          <TopArtistsWidget
            index={formattedIndexNumber}
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
