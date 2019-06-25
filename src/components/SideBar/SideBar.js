import React from 'react'
import LeaderBoard from '../LeaderBoard/LeaderBoard';
import LiveScore from '../LiveScore/LiveScore';
import './SideBar.css';

const SideBar=()=>{
        return (
            <div className="SideBar">
            <LiveScore/>
            <LeaderBoard/>

            </div>
        )
    
}

export default SideBar;