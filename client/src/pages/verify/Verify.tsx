import React from "react";
import verify from "./verifyImage/verify-image.png";
import "./Verify.css";
export default function Verify() {
  return (
    <body>
      <div className="container">
        <div className="imagediv">
          <img className="mainimage" src={verify} alt="" />
          <p className="white-text maintext">
            Plutus is personal <br /> finance, made simple
          </p>
          <p className="white-text">
            All your accounts,cards, savings and investments in <br /> one place
          </p>
        </div>
        <div className="verifycomponent">
          <div className="topright">
            <span className="plutus">Plutus</span>
            <p className="onlinebanking">Online banking</p>
          </div>
          <h2 className="h2">Verify your identity</h2>
          <p className="text-details">
            We've just sent a text message with your security code
          </p>
          <p className=" detail2">on the number *********</p>
          <p className="text-details">
            Please enter the number in order to continue
          </p>
          <div className="inputs">
            <input type="text" placeholder="0" />
            <input type="text" placeholder="0" />
            <input type="text" placeholder="0" />
            <input type="text" placeholder="0" />
          </div>
          <a href="#" className="button">
            Verify
          </a>
          <p className="password">Forgot your password?</p>
        </div>
      </div>
    </body>
  );
}
