import React from "react";

function Avatar({ contact }) {
  return (
      <div className="pic-avatar-min">
        <div>
          <div className="pic-avatar-min-letter">
            {contact.fullname[0]}
            {contact.online ? (
              <span className="pic-avatar-min-status" />
            ) : (
              <span />
            )}
          </div>
        </div>
      </div>
  );
}

export default Avatar;
