import React from "react";
import Avatar from "./Avatar";
import NameLastMessage from "./NameLastMessage";
import LastTime from "./LastTime";
import { useDispatch } from "react-redux";
import { chatId } from "../../../redux/actions";
import { useHistory, useParams } from "react-router-dom";

function Contact({ contact }) {
  const chatSelected = useParams().id;
  const dispatch = useDispatch();
  const history = useHistory();

  function handleOpenChat(contact) {
    if (chatSelected !== contact._id) {
      dispatch(chatId(contact));
      history.push(contact._id);
    }
  }

  return (
    <div
      className={
        chatSelected === contact._id ? "chat-contact-selected" : "chat-contact"
      }
      onClick={() => handleOpenChat(contact)}
    >
      <Avatar contact={contact}/>
      <NameLastMessage contact={contact}/>
      <LastTime contact={contact}/>
    </div>
  );
}

export default Contact;
