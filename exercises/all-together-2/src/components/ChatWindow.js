import React from "react";
import propTypes from "prop-types";
import MessageHistory from "./MessageHistory";
import MessageSender from "./MessageSender";

const ChatWindow = ({ user, messages, submitMessage }) => {
  return (
    <div className="chat-window">
      <h2>Super Awesome Chat</h2>
      <div className="name sender">{user}</div>
      <MessageHistory messages={messages} user={user} />
      <MessageSender user={user} submitMessage={submitMessage} />
    </div>
  );
};

ChatWindow.propTypes = {
  user: propTypes.string.isRequired,
  submitMessage: propTypes.func.isRequired
};

export default ChatWindow;
