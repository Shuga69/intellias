import React from 'react'
import FirstTeamCard from '../../../components/teamPage/firstTeamCard/FirstTeamCard'
import './FirstTeam.css'
import teamUser1 from '../../../assets/teamUser1.jpg'
import teamUser2 from '../../../assets/teamUser2.jpg'
import teamUser3 from '../../../assets/teamUser3.jpg'
import teamUser4 from '../../../assets/teamUser4.jpg'
import teamUser5 from '../../../assets/teamUser5.jpg'
import teamUser6 from '../../../assets/teamUser6.jpg'
import teamUser7 from '../../../assets/teamUser7.jpg'
import teamUser8 from '../../../assets/teamUser8.jpg'
import NavbarTeamPage from '../../../components/teamPage/NavbarTeamPage'
const FirstTeam = () => {
    return (
        <div className="first-team-section">
        <div className="container">
            <NavbarTeamPage/>
        <div className="first-team-page">
        
            <div className="top-users">
            <FirstTeamCard img={teamUser1} name="Wade Warren" position="Delivery Manager"/>
            <FirstTeamCard img={teamUser2} name="Jakob Dokidis" position="Solution Architect"/>
            <FirstTeamCard img={teamUser3} name="Jaylon Bergson" position="UI/UX Designer"/>
            <FirstTeamCard img={teamUser4} name="Livia Vetrovs" position="Senior Front-End Developer"/>
            </div>
            <div className="bottom-users">
            <FirstTeamCard img={teamUser5} name="Dulce Kenter" position="Junior Front-End Developer"/>
            <FirstTeamCard img={teamUser6} name="Gretchen Schleifer" position="Senior Back-End Developer"/>
            <FirstTeamCard img={teamUser7} name="Craig Torff" position="QA Lead"/>
            <FirstTeamCard img={teamUser8} name="Jaxson Curtis" position="QA Engineer"/>
            </div>
            </div>
            </div>
        </div>
    )
}

export default FirstTeam
