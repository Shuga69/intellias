import React from 'react';
import "./Header.css";
import logo from '../../assets/logo.svg';
import togle from '../../assets/headerTogle.svg'
import {NavLink} from "react-router-dom";
import './Header.css'
import Button from '../button/Button';
const Header = () => {
    return (
        <header className="header">
        <div className="container">
            <div className="header__inner">
                <NavLink className="brand-image" to="/">
                    <img
                        src={logo}
                        className="header__inner-logo"
                        alt="Logo"
                    />
                    <div className="logo-text">
                        <p>@clientname portal</p>
                    </div>
                </NavLink>

                <nav className="header-navigation">
                    <NavLink to="/team" className="header__navigation-link">Team</NavLink>
                    <NavLink to="/" className="header__navigation-link">Legal</NavLink>
                    <NavLink to="/wow" className="header__navigation-link">WOW</NavLink>
                    <NavLink to="/" className="header__navigation-link">Finance</NavLink>
                    <NavLink to="/" className="header__navigation-link">Metrics</NavLink>
                </nav>
                <img src={togle}/>
                <Button style = {{height: 44,background:"none"}} type="white" text="Request Service"/>
                {/* <div className="header__inner-toggle">
                    <ToggleButton click={props.drawerClickHandler} toggle={props.toggle}/>
                </div> */}
            </div>
        </div>
    </header>
    )
}

export default Header
