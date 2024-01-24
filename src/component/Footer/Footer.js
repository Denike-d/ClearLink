import React from "react";
import "./Footer.css";
import Google from "./Google.png";
import Apple from "./Apple.png";
import Logo from "./Logo.png";

export default function Footer() {
  return (
    <div className="footer">
      <div style={{ width: "400px" }}>
        <img src={Logo} width={100} />
        <p style={{ lineHeight: "1.5rem" }}>
          ClearLink is your gateway to effortless, high-quality video
          conferencing. Join us in shaping the future of communication!
        </p>
      </div>

      <div className="links">
        <p>Product</p>
        <a href="">Overview</a>
        <a href="">Features</a>
        <a href="">Solutions</a>
        <a href="">Tutorials</a>
        <a href="">Pricing</a>
      </div>
      <div className="links">
        <p>Company</p>
        <a href="">About us</a>
        <a href="">Careers</a>
        <a href="">Press</a>
        <a href="">News</a>
        <a href="">Contact</a>
      </div>
      <div className="links">
        <p>Resources</p>
        <a href="">Blog</a>
        <a href="">Events</a>
        <a href="">Help center</a>
        <a href="">Tutorials</a>
        <a href="">Support</a>
      </div>
      <div className="links">
        <p>Legal</p>
        <a href="">Terms</a>
        <a href="">Privacy</a>
        <a href="">Cookies</a>
        <a href="">Licenses</a>
        <a href="">Contact</a>
      </div>

      <div className="download">
        <p>Get the app</p>
        <a href="">
          <img src={Apple} width={100} />
        </a>
        <a href="">
          <img src={Google} width={100} />
        </a>
      </div>
    </div>
  );
}
