import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './Navigation';
import HomePage from './Home';
import SignUpPage from './Signup';
import SignInPage from './Login';
import ContactUsPage from './Contact';
import AboutUsPage from './About';
import PasswordForgetPage from './Password-forget';
import AccountPage from './Account';
import ChatPage from '../ChatApp/Chat';
import TherapistPage from './TherapyList';
import HomeHeader from './HomeHeader';
import NewLogin from './NewLogin';

import * as routes from '../constants/routes';
import { firebase, auth } from '../firebase/firebase';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState(() => ({ authUser }))
        : this.setState(() => ({ authUser }));
      });
  }

  render() {
    return(
      <Router>
      <div>
        <Navigation authUser={this.state.authUser} />
  
        <Route exact path = {routes.SIGN_IN} component = {() => <SignInPage />} />
  
        <Route exact path = {routes.SIGN_UP} component = {() => <SignUpPage />} />
  
        <Route exact path = {routes.PASSWORD_FORGET} component = {() => <PasswordForgetPage />} />
  
        <Route exact path = {routes.HOME} component = {() => <HomePage />} />
  
        <Route exact path = {routes.ACCOUNT} component = {() => <AccountPage />} />

        <Route exact path = {routes.ABOUT} component = {() => <AboutUsPage />} />

        <Route exact path = {routes.CONTACT} component = {() => <ContactUsPage />} />

        <Route exact path = {routes.CHAT_APP} component = {() => <ChatPage />} />

        <Route exact path = {routes.THERAPIST} component = {() => <TherapistPage />} />

        <Route exact path = {routes.HOME_HEADER} component = {() => <HomeHeader />} />

        <Route exact path = {routes.NEW_LOGIN} component = {() => <NewLogin />} />


      </div>
  
      </Router>
    );
  }
}
  
export default App;
