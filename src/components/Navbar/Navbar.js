import React from 'react';

import './Navbar.css'
import DrawerToggleButton from './../SideDrawer/DrawerToggleButton';

const Navbar = props => (
  <header className="navbar">
    <nav className="navbar__navigation">
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler}/>
      </div>
      <div className="navbar__logo"><a href="/">XE-BID</a></div>
      <div className="spacer"></div>
      <div className="navbar_navigation-items">
        <ul>
          <li><a href="/">Dashboard</a></li>
          <li><a href="/">History</a></li>
          <li><a href="/">Instructions</a></li>
          <li><a href="/">Log Out</a></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Navbar;