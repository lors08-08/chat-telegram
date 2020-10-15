import React from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function MessageInbox({ message }) {
  const opened = useParams().id;
  const chatSelected = useSelector((state) =>
    state.contacts.items.find((item) => {
      return item._id === opened;
    })
  );

    return (
      <div key={message._id} className="message-from">
        <div className="pic-avatar-min-2">{chatSelected.fullname[0]}</div>
        <span className="message-from-content">
          <div>{message.content}</div>
          <div className="message-time">
            {message.hasOwnProperty("time") &&
              moment(message.time).format("h:mm")}
          </div>
        </span>
      </div>
    );
}

export default MessageInbox;
