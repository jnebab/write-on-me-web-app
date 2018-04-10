import React, {Component} from 'react';


export default class ChatRoom extends Component {
    constructor(props, context) {
        super(props, context)
        this.newMessage = this.newMessage.bind(this)
        this.submitMessage = this.submitMessage.bind(this)
        this.state = {
            message: '',
            messages: []
        }
    }

    newMessage(event) {
       this.setState({
           message:event.target.value
       })
    }

    submitMessage(event) {
        const nextMessage = {
            id: this.state.messages.length,
            text: this.state.message
        }

        let list = Object.assign([], this.state.messages)
        list.push(nextMessage)
        this.setState({
            messages: list
        })
    }

    render(){
        const currentMessage = this.state.messages.map((message, i) => {
            return (
                <li key={message.id}>{message.text}</li>
            )
        })

        return(
            <div>
                <ol>
                   {currentMessage}
                </ol>
                <input type="text" placeholder="message" onChange={this.newMessage}/>
                <br/>
                <button type="submit" onClick={this.submitMessage}>Send</button>
            </div>
        );
    }
    
}