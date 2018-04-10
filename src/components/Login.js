import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { SignUpLink } from "./Signup";
import { auth, emailAuthProvider } from "../firebase/firebase";
import * as routes from "../constants/routes";
import "../css/main.css";
import "../css/Navigation.css";
import Footer from "./Footer";
import Logo from "../images/write-on-me.png";
import NewLogin from './NewLogin';
import {doSignInWithEmailAndPassword} from '../firebase/auth';

const SignInPage = ({ history}) => (
  <div>
    <div className="container signin-page">
      <h1>Login to</h1>
      <img src={Logo} alt="" />
      <Login history={history}/>
      <SignUpLink />
    </div>
    <Footer />
  </div>
);

const byPropkey = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    const { history } = this.props;

    
      doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME_HEADER);
      })
      .catch(error => {
        this.setState(byPropkey("error", error));
      });

    event.preventDefault();
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <div className="container">
        <form onSubmit={this.onSubmit} className="loginForm" >
          <input
            type="email"
            placeholder="Email Address"
            onChange={event =>
              this.setState(byPropkey("email", event.target.value))
            }
            value={email}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={event =>
              this.setState(byPropkey("password", event.target.value))
            }
          />
          <button disabled={isInvalid} type="submit" className="btn-login">
            Login
          </button>
          <a href="">Forgot password?</a>
          {error && <p className="error-message">{error.message}</p>}
        </form>
      </div>
    );
  }
}

export default withRouter(SignInPage);

export { Login };
