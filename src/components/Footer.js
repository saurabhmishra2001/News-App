import React from "react";

import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import "../styles/Footer.css"

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <a href="/"
        className="youtube social">
        <InstagramIcon />
      </a>
        <a href="/"
        className="youtube social">
        <TwitterIcon />
        </a>
        <a href="/"
        className="youtube social">
        <FacebookIcon />
        </a>
        <a href="/"
        className="youtube social">
        <LinkedInIcon />
        </a>
      </div>
      <p> &copy; 2022 Saurabh Kumar Mishra</p>
    </div>
  );
}

export default Footer;