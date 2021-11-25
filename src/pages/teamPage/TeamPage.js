import React from 'react'
import NavbarTeamPage from '../../components/teamPage/NavbarTeamPage'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainPage from '../mainPage/MainPage';
import WowPage from '../wowPage/WowPage';
import FirstTeam from './firstTeam/FirstTeam';
import OrgChart from '../../components/orgChart/OrgChartComponent';
import OrgChartTree from '../../components/orgChart/orgChartTree/OrgChartTree';
import OrganizationChart from './organizationChart/OrganizationChart';
import './TeamPage.css'
const TeamPage = () => {
    return (
        <div className="team-page-section">
        <div className="container">
         <NavbarTeamPage/>
    </div>
    </div>
    )
}

export default TeamPage
