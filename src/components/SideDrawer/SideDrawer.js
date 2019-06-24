import React from 'react';
import './SideDrawer.css';

const sideDrawer= props => {
  let drawerClasses='side-drawer';
  if(props.show){
    drawerClasses ='side-drawer open';
  }
  return(
    <nav className={drawerClasses}>
      <ul>
        <li><a href="/">Dashboard</a></li>
        <li><a href="/">History</a></li>
        <li><a href="/">Instructions</a></li>
        <li><a href="/">Log Out</a></li>
      </ul>
    </nav>
  );
};

export default sideDrawer;