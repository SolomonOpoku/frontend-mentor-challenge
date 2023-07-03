import React from "react";
import { useNavigate } from "react-router-dom";

function MobileSuccess() {

    const history = useNavigate()

    const handleClick = () => {
        history("/")
        alert("Successfully Done!")
    }

    return (
        <div className="mobile-success-container">
            <div className="mobile-success-body">
                <i class="fa fa-check-circle" aria-hidden="true" style={{ fontSize: "70px" }}></i>
                
                <h2>Thanks for subscribing!</h2>
                <p>A confirmation has been sent to your email <span>yeboahs324@gmail.com</span>. Please open it and click the button inside to confirm your subscription.</p>
            </div>

            <div className="mobile-success-button">
                <button onClick={handleClick}>Dismiss message</button>

            </div>
        </div>
    )
}

export default MobileSuccess;