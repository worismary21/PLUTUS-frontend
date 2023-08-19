import { useEffect, useState } from "react";
import verify from "./verifyImage/verify-image.png";
import veriffy from "./Verify.module.css";
import OtpInput from "react-otp-input";
import { Link } from "react-router-dom";

export default function Verify() {
  const [otp, setOtp] = useState("");
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);


//   const handleChange = (e) =>{
     // e.preventDefault()
//      setOtp(e.target.value)
//   }
//   console.log("otp", otp)

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const sendOTP = () => {
    setMinutes(4);
    setSeconds(59);
  };

  const resendOTP = () => {
    setMinutes(4);
    setSeconds(59);
  };

  return (
      <div className={veriffy.wrapper}>
        <div className={veriffy.imagediv}>
          <img className={veriffy.mainimage} src={verify} alt="" />
          <div className={veriffy.maindiv}>
            <p className={veriffy.maintext}>
              Plutus is personal finance, made simple
            </p>
            <p className={veriffy.whitetext}>
              All your accounts,cards, savings and investments in one place
            </p>

          </div>
         
        </div>
        <div className={veriffy.verifycomponent}>
          <div className={veriffy.topright}>
            <span className={veriffy.plutus}>Plutus</span>
            <p className={veriffy.onlinebanking}>Online banking</p>
          </div>
          <h2 className={veriffy.h2}>Verify your identity</h2>
          <p className={veriffy.textdetails}>
            We've just sent a text message with your security code on the email example@gmail.com
          </p>
          <p className={veriffy.textdetails}>
            Please enter the number in order to continue
          </p>
        
          <div className={veriffy.otpInput}>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderInput={(props) => <input {...props} />}
              inputStyle={{width: '50px'}}
              containerStyle={veriffy.otpStyle}
            />
          </div>

          <div className={veriffy.countdowntext}>
            {seconds > 0 || minutes > 0 ? (
              <p>
                Time Remaining: {minutes < 10 ? `0${minutes}` : minutes};
                {seconds < 10 ? `0${seconds}` : seconds}
              </p>
            ) : (
              <p>Didn't receive code?</p>
            )}
          </div>
          <div className={veriffy.btncont}>
            <Link to="/dashboard">
              <button className={veriffy.button} onClick={sendOTP}>Verify</button>
            </Link>
            <button
            className={veriffy.button}
              disabled={seconds > 0 || minutes > 0}
              style={{
                color: seconds > 0 || minutes > 0 ? "#fff" : "#FF5630",
              }}
              onClick={resendOTP}>
              I didn't get the code
            </button>
            <p className={veriffy.password}>Forgot your password?</p>
          </div>
        </div>
      </div>
  );
}
