import React from "react";
import Contacts from "./Contacts/Contacts";
import ContactsSearch from "./ContactsSearch";

function SideBar() {
  return (
    <div className="out-chat-box">
      <div className="chat-box">
        <ContactsSearch />
        <Contacts />
      </div>
    </div>
  );
}

export default SideBar;
