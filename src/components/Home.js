import React, { Component } from "react";
import PropTypes from "prop-types";
import ChatBot from "react-simple-chatbot";

import "../css/Navigation.css";
import Header from "./Header";
import Footer from './Footer';
import SimpleForm from '../ChatApp/chatbot'; 

class Home extends Component {
  render() {
    return (
      <div>
      <Header />
      <Footer />
      <SimpleForm />
      </div>
    )
  }
}
    
export default Home;