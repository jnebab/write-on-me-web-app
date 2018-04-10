import React from 'react';

import { auth } from '../firebase';
import '../css/Navigation.css';
import * as routes from "../constants/routes";

const INITIAL_STATE = {
    email: "",
    passwordOne: "",
  };

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value
  });

class SignOutButton extends React.Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.state = { ...INITIAL_STATE };

    }

    onSubmit = event => {
        const { email, passwordOne } = this.state;
    
        const { history } = this.props;
    
        auth
          .doSignOut(email, passwordOne)
          .then(authUser => {
            this.setState(() => ({ ...INITIAL_STATE }));
            history.push(routes.HOME);
          })
          .catch(error => {
            this.setState(byPropKey("error", error));
          });
    
        event.preventDefault();
      };

    render() {
        return (
            <button
            type="button"
            onClick={this.onSubmit}
            className="btn-signout"
        >
        Sign Out
        </button>
        )
    }
}
    

    

export default SignOutButton;