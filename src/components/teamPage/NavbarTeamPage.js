import React from 'react'
import Title from '../title/Title'
import './NavbarTeamPage.css'
import {NavLink} from "react-router-dom";

const NavbarTeamPage = () => {
    const titleStyles={
        border:"none"
    }
    return (
        <nav className="navbar">
           
            <div className="nav-container">
                <NavLink to="/orgChart"className="title" activeclassname="title-active"><Title style={titleStyles} text="Organization Chart"/></NavLink>
                <NavLink to="/team1" className="title" activeclassname="title-active"><Title style={titleStyles} text="Team 1"/></NavLink>
                <NavLink to="/team2" className="title" activeclassname="title-active"><Title style={titleStyles} text="Team 2"/></NavLink>
            </div>
            
        </nav>
    )
}

export default NavbarTeamPage
