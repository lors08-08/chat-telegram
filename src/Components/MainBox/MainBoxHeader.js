import React from "react";
import Search from "./Icons/Search";
import Option from "./Icons/Option";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function MainBoxHeader() {
  const chatSelected = useParams().id;
  const contacts = useSelector((state) => state.contacts.items);
  const loadingMessages = useSelector((state) => state.messages.loading);
  const selectedOne = contacts.find((el) => {
    return (el._id === chatSelected)
  });

  return (
    <div className="main-box-header">
      <Search />
      <div className="name-in-box">
        {loadingMessages ? (
          <div>loading</div>
        ) : (
          <div className="status-div">
            {selectedOne.fullname}
            {selectedOne.hasOwnProperty("online") &&
              (selectedOne.online ? (
                <div className="online" />
              ) : (
                <div className="offline" />
              ))}
          </div>
        )}
      </div>
      <Option />
    </div>
  );
}

export default MainBoxHeader;
