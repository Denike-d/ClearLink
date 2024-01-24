import React from "react";
import "./Faqs.css";
import Accordion from "./Accordion";
import { accordionData } from "./Content";

export default function Faqs() {
  return (
    <div className="faqs">
      <div className="first">
        <p style={{ color: "#175CD3" }}>Support</p>
        <h2>FAQs</h2>
        <p style={{ lineHeight: "1.5rem", color: "#667085" }}>
          Everything you need to know about the product
          <br /> and billing. Can’t find the answer you’re looking <br /> for?
          Please <a href="">chat to our friendly team.</a>
        </p>
      </div>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
}
