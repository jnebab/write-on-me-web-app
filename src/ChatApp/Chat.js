import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import * as routes from "../constants/routes";
import ChatRoom from "./ChatRoom";
import MessageList from "./MessageList";
import MessageBox from "./MessageBox";
import "../css/main.css";
import * as firebase from "firebase";
import { auth } from "../firebase/firebase";
import trim from 'trim';

const ChatLayout = () => (
  <div class="container">
    <h1>Write on Me Chat</h1>
    <Chat />
  </div>
);

class Chat extends Component {
    
  render() {
    return (
      <div className="container chat-container">
        <div class="messageList">
          <MessageList db={firebase} />
        </div>
        <div className="messageBox">
          <MessageBox db={firebase} />
        </div>
      </div>
    );
  }
}

const ChatLink = () => (
  <p>
    <Link to={routes.THERAPIST} className="chat-link">Look for Therapist</Link>
  </p>
);

export default withRouter(ChatLayout);

export { Chat, ChatLink };
