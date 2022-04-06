//social icons
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="Footer">
      <FontAwesomeIcon icon={faGithub} className="icon" />
      <FontAwesomeIcon icon={faInstagram} className="icon" />
      <FontAwesomeIcon icon={faFacebook} className="icon" />
      <FontAwesomeIcon icon={faTwitter} className="icon" />
    </div>
  );
}
