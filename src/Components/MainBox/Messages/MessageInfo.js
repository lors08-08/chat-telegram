import React from "react";

function MessageInfo({ message }) {
    return (
      <div key={message._id} className="message-info">
        <span>{message.content}</span>
      </div>
    );
}

export default MessageInfo;
