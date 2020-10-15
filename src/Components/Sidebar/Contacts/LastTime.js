import React from "react";
import moment from "moment";

function LastTime({ contact }) {
  return (
      <div className="last-time-min">
        {moment(contact.lastMessage?.time).format("hh:mm")}
      </div>
  );
}

export default LastTime;
