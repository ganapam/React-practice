import React,{useState}from 'react';
import './LoginSignup.css';
import user_icon from '../user.png';
import email_icon from '../confidential-email.png';
import password_icon from '../padlock.png';

const LoginSignup = () => {
    const [action,setAction]=useState("Sign Up");
  return (
    <div className='container'>
    <div className="header">
        <div className="text" >{action}</div>
        <div className="underline"></div>
    </div>
    <div className="inputs">
    {action==="Login"?<div></div>:<div className="input">
            <img src={user_icon} alt="user_icon" width="20px" />
            <input type="text" placeholder='username' />
        </div>}

        <div className="input">
            <img src={email_icon} alt="email_icon"  width="20px"  />
            <input type="email" placeholder='email' />
        </div>
        <div className="input">
            <img src={password_icon} alt="password_icon"  width="20px"  />
            <input type="password" placeholder='password'  />
        </div>
        {action=== "Sign Up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click Here</span></div>}
        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"}onClick={()=>{setAction("Sign Up")}}>SIgn Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"}onClickCapture={()=>{setAction("Login")}}>Login</div>
        </div>
    </div>

    </div>
 
  )
}

export default LoginSignup
