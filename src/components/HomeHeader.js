import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../constants/routes';

const Header = (props) => {
        return (
            <header>
                <div className="header-content">
                    <h2>Welcome to Write on Me!</h2>
                    <p>We offer online counselling to people who are experiencing from depression.</p>
                    <p>Click below to our check our available therapists.</p>
                    <Link to={routes.THERAPIST}>Chat Now!</Link>
                    <p>Start a new beginning today!</p>
                </div>
            </header>
        )
}

export default Header;