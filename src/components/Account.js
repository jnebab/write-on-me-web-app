import React, { Component } from 'react';


import { ChatLink } from '../ChatApp/Chat';
import Profile from './Profile';
import '../css/main.css';
import Footer from './Footer';

export default class Account extends Component {
  render() {
    return (
      <div className="container">
        <Profile title={this.props.title}/>
        <p>Click the button below to choose and chat with our listed therapists.  </p>
        <ChatLink />
        <Footer />
      </div>
    );
  }
}

