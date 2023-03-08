import React from "react";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

import "./leftbar.scss"

const Leftbar = () => {

  const {currentUser} = useContext(AuthContext);

  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={currentUser.profilePic} alt=""/>
            <span>{currentUser.name}</span>
          </div>
        <h4>VISIT YOUR COMMUNITIES FOR UPDATES</h4>
          <div className="item">
            <a href="western.html">WESTERN REGION</a>
          </div>
          <div className="item">
            <a href="eastern.html">EASTERN REGION</a> 
          </div>
          <div className="item">
            <a href="central.html">CENTRAL REGION</a>
          </div>
          <div className="item">
          <a href="volta.html">VOLTA REGION</a>
          </div>
          <div className="item">
          <a href="oti.html">OTI REGION</a>
          </div>
          <div className="item">
          <a href="ashanti.html">ASHANTI REGION</a>
          </div>
          <div className="item">
          <a href="northern.html">NORTHERN REGION</a>
          </div>
          <div className="item">
          <a href="northeast.html">NORTH EAST REGION</a>
          </div>
          <div className="item">
          <a href="westernnorth.html">WESTERN NORTH REGION</a>
          </div>
          <div className="item">
          <a href="bono.html">BONO REGION</a>
          </div>
          <div className="item">
          <a href="bonoeast.html">BONO EAST REGION</a>
          </div>
          <div className="item">
          <a href="accra.html">GREATER ACCRA REGION</a>
          </div>
          <div className="item">
          <a href="uppereast.html">UPPER EAST REGION</a>
          </div>
          <div className="item">
          <a href="upperwest.html">UPPER WEST REGION</a>
          </div>
          <div className="item">
          <a href="savannah.html">SAVANNAH REGION</a>
          </div>
          <div className="item">
          <a href="ahafo.html">AHAFO REGION</a>
          </div>
          </div>
        <hr/>
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <img src="assets/random/gift.png" alt=""/>
            <span>Gifts</span>
          </div>
          <div className="item">
            <img src="assets/random/gift.png" alt=""/>
            <span>Gifts</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
