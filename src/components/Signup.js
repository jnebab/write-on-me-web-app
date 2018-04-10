import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import { auth } from "../firebase";
import * as routes from "../constants/routes";
import "../css/main.css";
import Logo from "../images/write-on-me.png";
import Footer from "./Footer";
import NewLogin from './NewLogin';

const SignUpPage = ({ history }) => (
  <div>
    <div className="container signup-page">
      <h1>Welcome to</h1>
      <img src={Logo} alt="" />
      <SignUpForm history={history} />
    </div>
    <Footer />
  </div>
);

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;

    const { history } = this.props;

    auth
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.ACCOUNT);
      })
      .catch(error => {
        this.setState(byPropKey("error", error));
      });

    event.preventDefault();
  };

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";

    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={event =>
            this.setState(byPropKey("username", event.target.value))
          }
          ref={input => (this.username = input)}
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={event =>
            this.setState(byPropKey("email", event.target.value))
          }
          ref={input => (this.email = input)}
        />
        <input
          type="password"
          placeholder="Password"
          value={passwordOne}
          onChange={event =>
            this.setState(byPropKey("passwordOne", event.target.value))
          }
          ref={input => (this.passwordOne = input)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={passwordTwo}
          onChange={event =>
            this.setState(byPropKey("passwordTwo", event.target.value))
          }
        />
        <button disabled={isInvalid} type="submit" className="signup-btn">
          Signup
        </button>

        {error && <p className="error-message">{error.message}</p>}
        <NewLogin />
      </form>
      
    );
  }
}

const SignUpLink = () => (
  <p className="signup">
    Don't have an account? <Link to={routes.SIGN_UP}>Register</Link>
  </p>
  
);

export default withRouter(SignUpPage);

export { SignUpForm, SignUpLink };
