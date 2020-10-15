import React from "react";
import MessageInfo from "./MessageInfo";
import MessageOutbox from "./MessageOutbox";
import MessageInbox from "./MessageInbox";
import {useSelector} from "react-redux";

function Messages({ message }) {
  const myId = useSelector((state) => state.profile.id);

  if (myId._id === message.toUserId && message.type === "text") {
    return <MessageInbox message={message} />;
}
  if (message.type === "info") {
    return <MessageInfo message={message} />
}
  if (myId._id !== message.toUserId && message.type === "text") {
    return <MessageOutbox message={message}/>
  } return null
}
    export default Messages;

