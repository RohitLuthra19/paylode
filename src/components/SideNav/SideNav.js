// @flow

import React from 'react';
import { NavLink } from 'react-router-dom';

import './SideNav.scss';

const SideNav = () => {
  return (
    <nav id="sidebar">
      <div className="sidebar-header">
        <h3>Paylode</h3>
      </div>

      <ul className="list-unstyled components">
        <li>
          <NavLink to={`/dashboard`} exact activeClassName="active">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to={`/buying-moment`}>Buying Moment</NavLink>
        </li>
        <li>
          <NavLink to={`/logout`}>Logout</NavLink>
        </li>
      </ul>
    </nav> 
  );
}

export default SideNav;
