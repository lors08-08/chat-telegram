import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHotkeys } from "react-hotkeys-hook";
import {loadMessages, openProfile} from "../../redux/actions";
import Messages from "./Messages/Messages";
import {useParams} from "react-router-dom";

function Chat() {
  const dispatch = useDispatch();
  const chatLog = useSelector((state) => state.messages.chatLog);
  const searchValue = useSelector(
    (state) => state.application.searchValueMessages
  );
  const chatSelected = useParams().id;
  const myId = useSelector((state) => state.profile.id);
  const filterChatLog = chatLog.filter((item) => {
    let text = item.content;
    let lowerCase = text.toLowerCase();
    let lowerCaseSearch = searchValue.toLowerCase();
    return (lowerCase.indexOf(lowerCaseSearch) !== -1)
  });

  useEffect(() => {
    dispatch(loadMessages(chatSelected, myId._id));
  }, [dispatch, chatSelected, myId]);

  useHotkeys(
    "shift+p",
    () => {
      dispatch(openProfile());
    },
    {
      filter: () => true,
    }
  );

  return (
    <div className="main-box-chat-log">
      <div className="messages" id="bottom">
        {filterChatLog.map((message) => {
          return <Messages key={message._id} message={message} />;
        })}
      </div>
    </div>
  );
}

export default Chat;
