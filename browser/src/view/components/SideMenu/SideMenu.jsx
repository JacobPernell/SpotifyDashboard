import React from 'react';
import './SideMenu.scss';
import { NavItem } from './NavItem';
import { FiHome } from 'react-icons/fi';
import { FiSearch } from 'react-icons/fi';
import { FiFolder } from 'react-icons/fi';
import { FiMusic } from 'react-icons/fi';

export const SideMenu = () => {
  return (
    <div id='side-menu'>
      <div id='side-menu__header'>
        <h2>Spotify Dashboard</h2>
      </div>
      <div id='side-menu__nav-items'>
        <NavItem navText='Home' icon={<FiHome />} active={true} />
        <NavItem navText='Search' icon={<FiSearch />} active={false} />
        <NavItem navText='Playlists' icon={<FiFolder />} active={false} />
        <NavItem navText='Recommendations' icon={<FiMusic />} active={false} />
      </div>
    </div>
  );
};
