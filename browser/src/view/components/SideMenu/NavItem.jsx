import React from 'react';
import './NavItem.scss';

export const NavItem = ({ navText, icon, active }) => {
  return (
    <div className={`nav-item ${active ? 'active' : ''}`}>
      <div className='nav-item__icon'>{icon}</div>
      {navText}
    </div>
  );
};
