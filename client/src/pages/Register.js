
import React, { useState } from 'react';
import {useNavigate } from "react-router-dom";
import '../styles/signup.css';


const Login = () => {
    const [action, setAction] = useState('');
    const navigate = useNavigate();
  
    const signUpLink = () => {
      setAction(' active');
    };
  
    const loginLink = () => {
      setAction('');
    };
  
    const handleLoginSubmit = (event) => {
      event.preventDefault();
      // Perform login logic here
      // If login is successful, navigate to /home
      navigate('/makeappointments');
    };
  
    const handleSignUpSubmit = (event) => {
      event.preventDefault();
      // Perform signup logic here
      // If signup is successful, navigate to /home
      navigate('/makeappointments');
    };
  
    return (
      <div className="container">
        <div className="head">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEkv6dg5oDHHjkj_uxHOeYf4jxlEWriGmryV9fmayjbw&s" alt="logo" style={{width:'140px',height:'140px', borderRadius: '100px', marginLeft:'36px', gap: '2px', marginRight: '50px'}} />
          <h2 className="name">IVORY DENTAL</h2>
        </div>
        <div className={`wrapper${action}`}>
          <div className="form-box login">
            <form onSubmit={handleLoginSubmit}>
              <h1>Login</h1>
              <div className="input-box">
                <input type="text" placeholder="Username" required />
                
              </div>
              <div className="input-box">
                <input type="password" placeholder="password" required />
                
              </div>
              <div className="remember-forgot">
                <label><input type="checkbox" />Remember me</label>
                <a href="#">Forgot password?</a>
              </div>
              <button type="submit">Login</button>
              <div className="signUp-link">
                <p>Don't have an account? <a href="#" onClick={signUpLink}>Sign Up</a></p>
              </div>
            </form>
          </div>
          <div className="form-box signUp">
            <form onSubmit={handleSignUpSubmit}>
              <h1>Sign Up</h1>
              <div className="input-box">
                <input type="text" placeholder="Username" required />
                
              </div>
              <div className="input-box">
                <input type="email" placeholder="Email" required />
                
              </div>
              <div className="input-box">
                <input type="password" placeholder="password" required />
                
              </div>
              <div className="remember-forgot">
                <label><input type="checkbox" />I agree to the terms & conditions</label>
              </div>
              <button type="submit">Sign Up</button>
              <div className="signUp-link">
                <p>Already have an account? <a href="#" onClick={loginLink}>Login</a></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default Login;
  