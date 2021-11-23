import React from 'react'
import NavbarTeamPage from '../../components/teamPage/NavbarTeamPage'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainPage from '../mainPage/MainPage';
import WowPage from '../wowPage/WowPage';
import FirstTeam from './firstTeam/FirstTeam';

const TeamPage = () => {
    return (
        <div className="container">
        <Router>
        <NavbarTeamPage/>
       <Routes>
           <Route exact path="/orgChart" element={<FirstTeam/>}/>
           <Route exact path="/team1" element={<FirstTeam/>}/>
           <Route exact path="/team2" element={<WowPage/>}/>
       </Routes>
    </Router>
    </div>
    )
}

export default TeamPage
