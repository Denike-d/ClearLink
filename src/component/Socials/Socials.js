import React from "react";
import Twitter from "./Twitter.png";
import Instagram from "./Instagram.png";
import Github from "./Github.png";
import LinkedIn from "./LinkedIn.png";
import Facebook from "./Facebook.png";
import Youtube from "./Youtube.png";
import "./Socials.css";

export default function Socials() {
  return (
    <div className="socials">
      <div>
        <p>© 2023 ClearLink. All rights reserved.</p>
      </div>
      <div>
        <a href="">
          <img src={LinkedIn} width={24} className="icons" />
        </a>
        <a href="">
          <img src={Twitter} width={24} className="icons" />
        </a>
        <a href="">
          <img src={Facebook} width={24} className="icons" />
        </a>
        <a href="">
          <img src={Instagram} width={24} className="icons" />
        </a>
        <a href="">
          <img src={Github} width={24} className="icons" />
        </a>
        <a href="">
          <img src={Youtube} width={24} className="icons" />
        </a>
      </div>
    </div>
  );
}
