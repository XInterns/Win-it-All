import React, { Component } from 'react';

import './MainContainer.css';

import SideBar from '../SideBar/SideBar';
import  { BidBoard } from '../BidBoard/BidBoard';


export class MainContainer extends Component {
    render() {
        return (
            <div className="container">
              <BidBoard/>
              <SideBar/>
            </div>
        )
    }
}

export default MainContainer;