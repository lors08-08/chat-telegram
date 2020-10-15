import React from "react";
import moment from "moment";

function MessageOutbox({ message }) {
    return (
      <div key={message._id} className="message-to">
        <span className="message-to-content">
          <div>{message.content}</div>
          <div className="message-time">
            {message.hasOwnProperty("time") &&
              moment(message.time).format("h:mm")}
            {message.read ? (
              <div className="material-icons">done_all</div>
            ) : (
              <div className="material-icons">done</div>
            )}
          </div>
        </span>
      </div>
    );
}

export default MessageOutbox;
