import React from "react";
import "./Faqs.css";
import Accordion from "./Accordion";
import { accordionData } from "./Content";

export default function Faqs() {
  return (
    <div className="faqs">
      <div className="first">
        <p>Support</p>
        <h2>FAQs</h2>
        <p>
          Everything you need to know about the product and billing. Can’t find
          the answer you’re looking for? Please chat to our friendly team.
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
