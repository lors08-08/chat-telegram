import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function ProfileBody(props) {
  const selectedOne = props.item;

  return (
    selectedOne.hasOwnProperty("socials") && (
      <div className="body">
        <div>Social</div>
        <div className="min-body">
          {selectedOne?.socials && selectedOne.socials.instagram && (
            <div className="iconT">
              <div className="icon">
                <FontAwesomeIcon className="facebook" icon={faInstagram} />
              </div>
              <div>{selectedOne?.socials && selectedOne.socials.instagram}</div>
            </div>
          )}
          {selectedOne?.socials && selectedOne.socials.twitter && (
            <div className="iconT">
              <div className="icon">
                <FontAwesomeIcon className="facebook" icon={faTwitter} />
              </div>
              <div>{selectedOne?.socials && selectedOne.socials.twitter}</div>
            </div>
          )}
          {selectedOne?.socials && selectedOne.socials.facebook && (
            <div className="iconT">
              <div className="icon">
                <FontAwesomeIcon className="facebook" icon={faFacebookF} />
              </div>
              <div>{selectedOne?.socials && selectedOne.socials.facebook}</div>
            </div>
          )}
        </div>
      </div>
    )
  );
}

export default ProfileBody;
