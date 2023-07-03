import React, { useState } from "react";
import validator  from 'validator'
import { useNavigate } from 'react-router-dom'

function MobileHome() {

    const history = useNavigate()

    const [emailError, setEmailError] = useState("")
    const [email, setEmail] = useState("")
    const [style, setStyle] = useState()

    const validateEmail = () => {
        if (validator.isEmail(email)) {
            setEmailError("Valid Email:)")
            history("/success")
        } else {
            setEmailError("Valid Email Required")
            setStyle({ border: "1px solid red", backgroundColor: "#fadada" });
        }
    }

    return (
        <div className="mobile-home-container">
            <div className="first-mobile-container">
                <img src="/images/illustration-sign-up-mobile.svg" alt="mobile_background_image" />
            </div>

            <div className="second-mobile-container">
                <h2>Stay updated!</h2>
                <p>Join 60,000+ products managers receiving monthly updates on:</p>
          <ul>
            <li>
              <i
                class="fa fa-check-circle"
                aria-hidden="true"
                style={{ fontSize: "23px" }}
              ></i>
              Products discovery ond building what matters
            </li>
            <li>
              <i
                class="fa fa-check-circle"
                aria-hidden="true"
                style={{ fontSize: "23px" }}
              ></i>
              Measuring to ensure updates are a success
            </li>
            <li>
              <i
                class="fa fa-check-circle"
                aria-hidden="true"
                style={{ fontSize: "23px" }}
              ></i>
              And much more!
            </li>
          </ul>
            </div>

            <div className="form-container">
                <label>Email address</label>
                <span>{emailError}</span>
                <br />
                <input
                  type="email"
                    placeholder="email@company.com"
                    style={style}
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                />
                <br />
                <br />
                <button onClick={validateEmail}>
                  Subscribe to monthly newsletter
                </button>
              </div>
        </div>
    )
}

export default MobileHome;