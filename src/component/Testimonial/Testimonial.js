import React from "react";
import Shopify from "./Shopify.png";
import Image from "./Image.png";
import Image_1 from "./Image_1.png";
import Image2 from "./Image2.png";
import Image3 from "./Image3.png";
import Star_icon from "./Star_icon.png";
import Image4 from "./Image4.png";
import Avatar from "./Avatar.png";
import "./Testimonial.css";
import LeftArrow from "./LeftArrow.svg";
import RightArrow from "./RightArrow.png";

export default function Testimonial() {
  return (
    <div className="testimonial">
      <div className="first">
        <img src={Shopify} width={100} />
        <div className="stars">
          <img src={Star_icon} width={24} />
          <img src={Star_icon} width={24} />
          <img src={Star_icon} width={24} />
          <img src={Star_icon} width={24} />
          <img src={Star_icon} width={24} />
        </div>

        <img src="" />
        <h3>
          ClearLink has upgraded our remote meetings. High-quality video, screen
          sharing, andtop-notch security make it essential for our team.
        </h3>
        <div className="container">
          {" "}
          <div className="testimony">
            <div>
              <img src={Avatar} width={56} />
            </div>
            <div>
              <p style={{ fontWeight: "bold" }}>Sarah Thompson </p>
              <p style={{ marginTop: "-10px" }}> Project Manager, Shopify</p>
            </div>
          </div>
          <div className="arrows">
            <button>
              <img src={LeftArrow} width={40} style={{ marginRight: "10px" }} />
            </button>
            <img src={RightArrow} width={40} />
          </div>
        </div>
      </div>
      <div className="pictures">
        <img src={Image} width={160} />
        <img src={Image_1} width={160} height={240} />
        <br />
        <img src={Image2} width={192} height={128} />
        <img src={Image3} width={160} height={240} />
        <img src={Image4} width={192} height={128} />
      </div>
    </div>
  );
}
