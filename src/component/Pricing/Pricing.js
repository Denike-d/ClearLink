import React from "react";
import mockup from "./mockup.png";
import "./Pricing.css";
import check_circle from "./check_circle.png";

export default function Pricing() {
  return (
    <div className="pricing">
      <div>
        <p style={{ fontWeight: "600", fontSize: "38px" }}>
          Ready to clear the path to <br /> perfect communication?
        </p>
        <div>
          <div className="check">
            <img src={check_circle} width={24} height={24} />
            <p>30 days free trial</p>
          </div>
          <div className="check">
            <img src={check_circle} width={24} height={24} />
            <p>30 days free trial</p>
          </div>
          <div className="check">
            <img src={check_circle} width={24} height={24} />
            <p>30 days free trial</p>
          </div>
          <div className="check">
            <img src={check_circle} width={24} height={24} />
            <p>30 days free trial</p>
          </div>
        </div>
        <div className="buttons">
          <button className="one">Talk to sales</button>
          <button className="two">Start your free trial</button>
        </div>
      </div>
      <div style={{ position: "absolute", right: "-0rem" }}>
        <img src={mockup} width={650} />
      </div>
    </div>
  );
}
