import React, { useState } from "react";
import "./GiftBox.css";

import Gift from "./assets/gift.png"

const GiftBox = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = () => {
    if(navigator.vibrate) {
        navigator.vibrate([100, 100, 100, 100, 100]);
        }
    setIsOpened(true);
  };

  return (
    <div className="gift-container">
      <div className={`gift-box ${isOpened ? "opened" : ""}`}>
        <div className="lid">
          <div className="ribbon-horizontal"></div>
          <div className="ribbon-vertical"></div>
        </div>
        <div className="box">
          <div className="pattern"></div>
        </div>
        <div className={`surprise ${isOpened ? "pop-out" : ""}`}>
            <img src={Gift} alt="gift" />
        </div>
      </div>
      {!isOpened && (
        <button className="open-button" onClick={handleOpen}>
          Open Gift
        </button>
      )}
    </div>
  );
};

export default GiftBox;
