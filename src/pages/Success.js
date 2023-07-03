import React from 'react';
import { useNavigate } from 'react-router-dom';
import ResizeWindow from '../WindowResize/WindowResize';
import MobileSuccess from './mobilePages/MobileSuccess';

function Success() {
    const history = useNavigate();
    const { width } = ResizeWindow()

    const handleClick = () => {
        history("/")
        alert("Successfully Done")
    }

    return (
    <div>
        { width > 450 ? (
        <div className="success-container">
            <div className='success-body'>
            <i class="fa fa-check-circle" aria-hidden="true" style={{fontSize:"40px"}}></i>
                <h2>Thanks for subscribing!</h2>
                <p>A confirmation has been sent to your email <span>yeboahs324@gmail.com</span>. Please open it and click the button inside to confirm your subscription.</p>
            </div>
            
            <div className='success-button'>
                <button onClick={handleClick}>Dismiss message</button>
            </div>
            </div>
        ) : (
                <MobileSuccess />
            )}
            </div>
    )
}

export default Success;