import React from "react";

function ProfileHeader({ item }) {
  return (
    <div>
      <div className="header">
        <div className="pic-avatar-full">
          <div>{item.fullname[0]}</div>
        </div>
        <div className="min-header">
          <div className="name-profile">{item.fullname}</div>
          <div className="tag">@{item.username}</div>
          <div className="icons-for-profile">
            <div className="call">
              <span className="material-icons md-32">call</span>
            </div>
            <div className="video">
              <span className="material-icons">videocam</span>
            </div>
            <div className="mail">
              <span className="material-icons">mail</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
