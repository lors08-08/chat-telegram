import React from "react";
import {  useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Chat from "../../Components/MainBox/Chat";
import MainBoxBottom from "./MainBoxBottom";
import MainBoxHeader from "./MainBoxHeader";

function MainBox() {
  const chatSelected = useParams().id;
  const contact = useSelector((state) => state.contacts.items);
  const selectedOne = contact.find((el) => {
    return el._id === chatSelected;
  });

  return selectedOne ? (
    <div className="main-box">
      <MainBoxHeader />
      <Chat />
      <MainBoxBottom />
    </div>
  ) : (
    <div className="box-loading" id="bottom">Please, select a chat to start messaging</div>
  );


}

export default MainBox;
