import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from './SignOut';
import * as routes from '../constants/routes';
import '../css/Navigation.css';
import Logo from '../images/write-on-me.png';

const Navigation = ({ authUser }) =>
    <div>
        { authUser 
            ? <NavigationAuth />
            : <NavigationNonAuth />
        }
    </div>

    const NavigationAuth = () =>
        <div className="nav">
            <ul role="navigation" className="navbar">
                <li className="brand-name">
                    <Link to={routes.HOME}><img src={Logo} alt="Logo" height="50" width="240"/></Link>
                </li>
                <li>Helping People with Depression EveryDay. </li>
                <li>
                    <Link to={routes.HOME_HEADER}>Home</Link>
                </li>
                <li>
                    <Link to={routes.ABOUT}>About Us</Link>
                </li>
                <li>
                    <Link to={routes.CONTACT}>Contact Us</Link>
                </li>
                <li>
                    <Link to={routes.CHAT_APP}>Messages</Link>
                </li>
                <li>
                    <Link to={routes.ACCOUNT}>Profile</Link>
                </li>
                <li><SignOutButton /></li>
            </ul>
        </div>

        const NavigationNonAuth = () =>
        <div className="nav">
            <ul role="navigation">
                <li className="brand-name">
                    <Link to={routes.HOME}><img src={Logo} alt="Logo" height="50" width="240"/></Link>
                </li>
                <li>Helping People with Depression EveryDay. </li>
                <li>
                    <Link to={routes.HOME}>Home</Link>
                </li>
                <li>
                    <Link to={routes.ABOUT}>About Us</Link>
                </li>
                <li>
                    <Link to={routes.CONTACT}>Contact Us</Link>
                </li>
                <li>
                    <Link to={routes.SIGN_IN}>Sign In</Link>
                </li>
            </ul>
        </div>

export default Navigation;