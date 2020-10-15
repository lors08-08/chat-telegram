import React from "react";
import Profile from "./Profile";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";

function ProfileWrapper() {
  const profile = useSelector((state) => state.application.profileOpened);
  return (
    <CSSTransition in={profile} timeout={1000} unmountOnExit classNames="profile">
      <Profile />
    </CSSTransition>
    )
}

export default ProfileWrapper;
