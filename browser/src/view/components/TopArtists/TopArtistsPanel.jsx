import React from 'react';
import './TopArtistsPanel.scss';
import { TopArtistsWidget } from './TopArtistsWidget';

export const TopArtistsPanel = ({ artists }) => {
  return (
    <div id='top-artists-container'>
      <span id='top-artists-title'>Top 10 Artists</span>
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
