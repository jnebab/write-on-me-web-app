import React, { Component, PropTypes } from 'react';
import { auth } from '../firebase/firebase'
import NewLogin from './NewLogin';
import CurrentUser from './CurrentUser';

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null
        }
    }

    componentDidMount() {
        auth.onAuthStateChanged((currentUser) => {
            this.setState({
                currentUser
            });
        });
    };

    render() {
        return (
            <CurrentUser />
        )
    }
}

export default Profile;