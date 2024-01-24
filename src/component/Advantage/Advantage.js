import React from "react";
import People from "./People.png";
import Video from "./Video.png";
import Recording from "./Recording.png";
import Calendar from "./Calendar.png";
import Lock from "./Lock.png";
import "./Advantage.css";

export default function Advantage() {
  return (
    <div className="advantage">
      <div>
        <p style={{ color: "#175CD3", fontWeight: "600" }}>
          The ClearLink Advantage
        </p>
        <p
          style={{
            fontWeight: "600",
            fontSize: "38px",
            marginTop: "-15px",
          }}
        >
          Why choose ClearLink?
        </p>
        <p style={{ lineHeight: "1.5rem", marginTop: "-20px" }}>
          In a world where connection is everything, ClearLink takes the lead.
          <br />
          Our cutting-edge video conferencing app offers:
        </p>
      </div>
      <div className="items">
        <div className="grid-container">
          <div className="item">
            <img src={Video} width={46} />
            <h4>Crystal-clear HD video</h4>
            <p>
              No more pixelation or blurriness just stunning, lifelike clarity
              that brings your team closer in meetings.
            </p>
          </div>
          <div className="item">
            <img src={Recording} width={46} />
            <h4>Noise-canceling audio</h4>
            <p>
              Say goodbye to distractions with our advanced audio tech for
              crisp, interruption-free conversations.
            </p>
          </div>
          <div>
            <img src={Calendar} width={46} />
            <h4>Scheduling made easy</h4>
            <p>
              Streamline your agenda with ClearLink's intuitive scheduling. Set
              up meetings, send invitations, and receive reminders in one place.
            </p>
          </div>
          <div>
            <img src={Lock} width={46} />
            <h4>Bank-grade security</h4>
            <p>
              Your privacy is our priority with bank-grade security protocols
              safeguarding your meetings and data from unwanted intruders.
            </p>
          </div>
        </div>
        <div>
          <img src={People} width={450} />
        </div>
      </div>
    </div>
  );
}
