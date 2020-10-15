import React from "react";
import ProfileHeader from "./ProfileHeader"
import ProfileBody from "./ProfileBody"
import ProfileBottom from "./ProfileBottom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Profile() {
  const chatSelected = useParams().id;
  const contact = useSelector((state) => state.contacts.items);
  const loadingMessages = useSelector((state) => state.messages.loading);

  const selectedOne = contact.find((el) => {
    return (el._id === chatSelected)
  });

  return (
    <div className="profile-tab">
      {loadingMessages ? (
        <div />
      ) : (
        <div>
          <ProfileHeader item={selectedOne} />
          <ProfileBody item={selectedOne} />
          <ProfileBottom />
        </div>
      )}
    </div>
  );
}

export default Profile;
