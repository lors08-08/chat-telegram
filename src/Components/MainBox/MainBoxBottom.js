import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendTextValue } from "../../redux/actions";
import Mic from "./Icons/Mic";
import Staple from "./Icons/Staple";

function MainBoxBottom() {
  const sentMessageValue = useSelector((state) => state.messages.sentMessage);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(sendTextValue(event.target.value));
  };

  return (
    <div className="main-box-bottom">
      <div className="input-message">
        <input
          placeholder="Write a message"
          type="text"
          value={sentMessageValue}
          onChange={handleChange}
        />
      </div>
      <div className="staple-mic">
        <Staple />
        <Mic />
      </div>
    </div>
  );
}

export default MainBoxBottom;
