import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../constants/routes';

const Header = (props) => {
        return (
            <header>
                <div className="header-content">
                    <h1>Start your recovery today!</h1>
                    <p>The only online counselling website in Ilocos Region</p>
                    <Link to={routes.SIGN_UP}>Sign Up!</Link>
                    <p>Strictly FREE and CONFIDENTIAL!</p>
                </div>
            </header>
        )
}

export default Header;