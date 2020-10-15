import React from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { useSelector, useDispatch } from "react-redux";
import { sendMessage } from "../../../redux/actions";
import { useParams } from "react-router-dom";
import { useHotkeys } from "react-hotkeys-hook";

function Mic() {
  const myId = useSelector((state) => state.profile.id);
  const chatSelected = useParams().id;
  const sentMessageValue = useSelector((state) => state.messages.sentMessage);
  const sentMessageType = useSelector(
    (state) => state.messages.sentMessageType
  );
  const dispatch = useDispatch();
  const send = (message) => {
    if (message !== "") {
      dispatch(sendMessage(myId._id, chatSelected, message, sentMessageType));
    }
  };
  const handle = () => {
    send(sentMessageValue);
  };

  useHotkeys(
    "enter",
    (e) => {
      e.preventDefault();

      send(sentMessageValue);
    },
    [sentMessageValue]
  );

  return (
    <div className="mic">
      <SwitchTransition>
        <CSSTransition
          key={sentMessageValue.length < 1}
          addEndListener={(node, done) =>
            node.addEventListener("transitionend", done, false)
          }
          classNames="fade"
        >
          {sentMessageValue.length < 1 ? (
            <span
              className="material-icons"
              style={{ color: "#565656", marginRight: "20px" }}
            >
              mic
            </span>
          ) : (
            <span
              className="material-icons"
              onClick={() => {
                handle();
              }}
              style={{ color: "#565656", marginRight: "20px" }}
            >
              send
            </span>
          )}
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}

export default Mic;
