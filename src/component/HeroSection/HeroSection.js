import React from "react";
import HeroImage from "./HeroImage.png";
import "./HeroSection.css";
import Avatars from "./Avatars.png";
import Star_icon from "./Star_icon.png";
import Ai from "./Ai.png";

export default function HeroSection() {
  return (
    <div className="hero-section">
      <div className="first-section">
        <h2>
          Uniting the world, <br />
          one video call at a time
        </h2>
        <p>
          Experience the future of communication with ClearLink <br /> – where
          crystal-clear video conferencing meets <br /> unparalleled simplicity.
        </p>
        <div className="buttons">
          <button className="one">Start your free trial</button>
          <div className="ai">
            <img src={Ai} width={20} />
            <a href="">
              <p>Discover AI assistance</p>
            </a>
          </div>
        </div>
        <div className="avatars">
          <div>
            <img src={Avatars} width={100} />
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div>
                <img src={Star_icon} width={24} />
                <img src={Star_icon} width={24} />
                <img src={Star_icon} width={24} />
                <img src={Star_icon} width={24} />
                <img src={Star_icon} width={24} />
              </div>
              <div>
                <p>5.0</p>
              </div>
            </div>

            <p style={{ marginTop: "-10px" }}>from 3,000+ reviews</p>
          </div>
        </div>
      </div>
      <div className="second-section">
        <img src={HeroImage} width={550} />
      </div>
      <div></div>
    </div>
  );
}
