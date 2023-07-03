import React, { useState } from "react";
import validator from "validator";
import { useNavigate } from "react-router-dom";
import ResizeWindow from "../WindowResize/WindowResize";
import MobileHome from "./mobilePages/MobileHome";

function Home() {
  const history = useNavigate();
    
  const [emailError, setEmailError] = useState("");
  const [email, setEmail] = useState("");
  const [style, setStyle] = useState();

  const { width } = ResizeWindow();

  // Email Validation
  const validateEmail = () => {
    if (validator.isEmail(email)) {
      setEmailError("Valid Email :)");
      history("/success");
    } else {
      setEmailError("Valid Email Required!");
      setStyle({ border: "1px solid red", backgroundColor: "#fadada" });
    }
  };

  return (
    <div>
      {width > 450 ? (
        <div className="home-container">
          <div className="first-container">
            <h1>Stay updated!</h1>
            <div className="first-container-body">
              <p>
                Join 60,000+ products managers receiving monthly updates on:
              </p>
              <ul>
                <li>
                  <i
                    class="fa fa-check-circle"
                    aria-hidden="true"
                    style={{ fontSize: "18px" }}
                  ></i>
                  Products discovery ond building what matters
                </li>
                <li>
                  <i
                    class="fa fa-check-circle"
                    aria-hidden="true"
                    style={{ fontSize: "18px" }}
                  ></i>
                  Measuring to ensure updates are a success
                </li>
                <li>
                  <i
                    class="fa fa-check-circle"
                    aria-hidden="true"
                    style={{ fontSize: "18px" }}
                  ></i>
                  And much more!
                </li>
              </ul>
              <div className="form-container">
                <label>Email address</label>
                <span>{emailError}</span>
                <br />
                <input
                  style={style}
                  type="email"
                  placeholder="email@company.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <br />
                <button onClick={validateEmail}>
                  Subscribe to monthly newsletter
                </button>
              </div>
            </div>
          </div>

          <div className="second-container">
            <img
              src="/images/illustration-sign-up-desktop.svg"
              alt="background_image"
            />
          </div>
        </div>
      ) : (
        <MobileHome />
      )}
    </div>
  );
}

export default Home;
