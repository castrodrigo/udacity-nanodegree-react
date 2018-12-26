import React from "react";

const MessageHistory = ({ messages, user }) => (
  <ul className="message-list">
    {messages.map((message, index) => (
      <li
        key={index}
        className={
          message.username === user ? "message sender" : "message recipient"
        }
      >
        <p>{`${message.username}: ${message.text}`}</p>
      </li>
    ))}
  </ul>
);

export default MessageHistory;
