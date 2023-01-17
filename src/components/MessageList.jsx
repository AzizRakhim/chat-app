import React, { Component } from "react";

const DUMMY_DATA = [
  { senderId: "perborgen", text: "Hey, how is it going?" },
  { senderId: "janedoe", text: "Great! How about you?" },
  { senderId: "perborgen", text: "Good to hear! I am great as well" },
];

class MessageList extends Component {
  render() {
    return <div className="message-list">Message list</div>;
  }
}

export default MessageList;
