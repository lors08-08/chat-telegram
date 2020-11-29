import React from "react";
import {  useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Chat from "../../Components/MainBox/Chat";
import MainBoxBottom from "./MainBoxBottom";
import MainBoxHeader from "./MainBoxHeader";
import githubIcon from "./Icons/githubIcon.svg"

function MainBox() {
  const chatSelected = useParams().id;
  const contact = useSelector((state) => state.contacts.items);
  const selectedOne = contact.find((el) => {
    return el._id === chatSelected;
  });
  return (
    <>
      <a href="https://github.com/lors08-08/chat-telegram"><img src={githubIcon} className="github-icon"/></a>
      {selectedOne ? (
        <div className="main-box">
          <MainBoxHeader/>
          <Chat/>
          <MainBoxBottom/>
        </div>
      ) : (
        <div className="box-loading" id="bottom">
          Please, select a chat to start messaging
        </div>
      )}
    </>
  )


}

export default MainBox;
