import React from "react";
import {  useSelector } from "react-redux";
import Contact from "./Contact";

function Contacts() {
  const contacts = useSelector((state) => state.contacts.items);
  const searchValue = useSelector(
    (state) => state.application.searchValueContacts
  );

  const filterContacts = contacts.filter((item) => {
    const text = item.fullname.toLowerCase();
    const lowerCaseSearch = searchValue.toLowerCase();

    return text.indexOf(lowerCaseSearch) !== -1;
  });

  return (
    <div className="chat-contact-container">
      {filterContacts.map((contact) => {
        return (
          <Contact key={contact._id} contact={contact} />
        );
      })}
    </div>
  );
}

export default Contacts;
