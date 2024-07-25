import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By AnkitKiCode</div>
      <div>
        <Link to={"https://www.facebook.com/profile.php?id=100032790098297"} target="_blank">
          <FaFacebookF />
        </Link>
        <Link to={"https://www.youtube.com/@ankit_ki_code"} target="_blank">
          <FaYoutube />
        </Link>
        <Link to={"https://www.linkedin.com/in/ankit-jatav-48b9b8257/"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/ankit_ki_code/"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
