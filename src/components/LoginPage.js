import React from 'react'
import { useState } from 'react';
import '../components/LoginPageStyle.css';
import logo from '../assets/images/logo.jpg';
 
import Navbar from './Navbar';
 

const LoginPage = () => {
    const handler = () =>{
        //code 
        
    }
  return (
  <div>
  <div className="wrapper fadeInDown my-5">
  <div id="formContent">
   


    <div className="fadeIn first">
      <img src={logo} id="icon" alt="User Icon" height={80} width={100} />
    </div>

    
    <form >
      <input type="text" id="login" className="fadeIn second" name="login"   placeholder="login"/>
      <input type="text" id="password" className="fadeIn third" name="login" placeholder="password"/>
      <input type="submit" className="fadeIn fourth" onClick={handler()} value="Log In"/>
    </form>

    
    <div id="formFooter">
      <a className="underlineHover" href="#">Forgot Password?</a>
    </div>

  </div>
</div>
  </div>
  )
}

export default LoginPage