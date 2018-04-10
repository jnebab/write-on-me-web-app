import React, { Component } from "react";
import Message from "./Message";
import _ from "lodash";
import '../css/Chat.css';

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
    let app = this.props.db.database().ref(" ");
    app.on("value", snapshot => {
      this.getData(snapshot.val());
    });
  }

  // componentDidUpdate() {
  //   // There is a new message in the state, scroll to bottom of list
  //   const objDiv = document.getElementById('newMessage');
  //   objDiv.scrollTop = objDiv.scrollHeight;
  // }

  getData(values) {
    let messagesVal = values;
    let messages = _(messagesVal)
      .keys()
      .map(messageKey => {
        let cloned = _.clone(messagesVal[messageKey]);
        cloned.key = messageKey;
        return cloned;
      })
      .value();
    this.setState({
      messages
    });
  }

  render() {
    let messageNodes = this.state.messages.map(message => {
      return (
        <div className="messageCard">
          <div className="messageContent">
            <Message message={message.message} />
          </div>
        </div>
      );
    });
    return <div class="messageNodes" id="newMessage">{messageNodes}</div>;
  }
}

export default MessageList;
