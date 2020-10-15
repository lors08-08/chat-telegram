import React from "react";
import { openProfile } from "../../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

function Option() {
  const loadingMessages = useSelector((state) => state.messages.loading);
  const dispatch = useDispatch();

  return (
    <div className="option-icon-box">
      <span
        className="material-icons"
        style={loadingMessages ? { pointerEvents: "none", opacity: "0.4" } : {}}
        onClick={() => dispatch(openProfile())}
      >
        settings
      </span>
    </div>
  );
}

export default Option;
