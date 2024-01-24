import React from "react";
import Coinbase from "./Coinbase.png";
import Automattic from "./Automattic.png";
import Marvel from "./Marvel.png";
import Shopify from "./Shopify.png";
import Intercom from "./Intercom.png";
import Dropbox from "./Dropbox.png";
import "./SocialProof.css";
export default function SocialProof() {
  return (
    <div className="social-proof">
      <p style={{ textAlign: "center" }}>
        Join 1,500+ companies already video conferencing the ClearLink way
      </p>
      <div className="logos">
        <img src={Shopify} width={151} height={43} />
        <img src={Coinbase} width={177} height={32} />
        <img src={Dropbox} width={183} height={36} />
        <img src={Intercom} width={174} height={40} />
        <img src={Marvel} width={100} height={40} />
        <img src={Automattic} width={240} height={18} />
      </div>
    </div>
  );
}
