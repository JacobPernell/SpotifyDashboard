import React from 'react';
import './TopPanel.scss';
import { TopArtistsWidget } from '../PanelWidget/TopArtistsWidget';

export const TopArtistsPanel = ({ artists }) => {
  return (
    <div id='top-panel-container'>
      <h1 id='top-panel-title'>Top 10 Artists</h1>
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
