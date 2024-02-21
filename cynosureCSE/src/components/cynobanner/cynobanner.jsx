import React from "react";
// import heroImage from "../images/SL_043021_42650_12 1.png";
import heroImage from "../../assets/mainBackground.png";

// import arrow from "../../assets/arrow.png";
import "./cynobanner.css";

import { AiOutlineArrowRight } from "react-icons/ai";

function CynoBanner() {
  return (
    <>
      <div className="header">
        <div className="mainImage">
          <img src={heroImage} alt="heroImage"></img>
        </div>
        <div className="Content">
          <div className="title">
            <p>Cynosure</p>
          </div>
          <p className="year">2K23</p>
          <div className="Matter">
            <p>
              Cynosure of 2 DAYS, is a multifaceted technical fest organized to
              bring out the real talent. This takes you into a whole new world
              combined with excited events, flawless creative designs
              tantalizing quizzes and feet tapping brain teasers.
            </p>
          </div>
          <div className="date">
            <p>Let’s Meet on Nov 18,19</p>
          </div>
          <div className="register">
            <div className="register_details">
            <button className="register_button">Get Registered</button>
            <AiOutlineArrowRight className="register_icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CynoBanner;
