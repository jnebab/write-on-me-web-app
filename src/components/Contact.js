import React, { Component } from "react";

import "../css/main.css";
import Footer from './Footer';

export default class Contact extends Component {
  render() {
    return (
      <div>
        <div className="container contact-form">
          <h1>Contact Us</h1>
          <form action="">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
            <input type="text" placeholder="Subject" />
            <textarea name="" id="" cols="30" rows="10" />
            <button type="submit">Send</button>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}
