import React, { Component, PropTypes } from 'react';
import { auth } from '../firebase/firebase'
import NewLogin from './NewLogin';

const CurrentUser = ( { user }) => {
    return (
        <div className="currentUser" >
            user information here
        </div>
    );
};

// Profile.PropTypes = {
//     user: PropTypes.shape({
//         displayName: PropTypes.string,
//         email: PropTypes.string.isRequired,
//         photoURL: PropTypes.string
//     })
// };

export default CurrentUser;