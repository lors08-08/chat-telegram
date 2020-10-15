import React from "react";

function NameLastMessage({ contact }) {


  function shorthand(word) {
    if (word?.length > 10) {
      return word.substring(0, 9) + "...";
    }
    return word;
  }

  //todo для аватарки сделать отдельный компонент

  return (
      <div className="name-and-message-min">
        <div className="name-contact-min">{contact.fullname}</div>
        <div className="last-message-min">
          {shorthand(contact.lastMessage?.content)}
        </div>
      </div>
  );
}

export default NameLastMessage;
