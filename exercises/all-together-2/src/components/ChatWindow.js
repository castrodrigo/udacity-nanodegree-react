import React from "react";
import MessageHistory from "./MessageHistory";
import MessageSender from "./MessageSender";

const ChatWindow = ({ user, messages }) => {
  return (
    <div className="chat-window">
      <h2>Super Awesome Chat</h2>
      <div className="name sender">{user}</div>

      <MessageHistory messages={messages} user={user} />
      <MessageSender />
    </div>
  );
};

export default ChatWindow;
