import React from "react";
import { useState } from "react";
import "../components/LoginPageStyle.css";
import logo from "../assets/images/logo.jpg";

import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    username: "",
    password: "",
  });
  
  localStorage.setItem("password", data.password);
  const inputHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    localStorage.setItem("username", data.username);
  };

  const handler = (e) => {
    e.preventDefault();
    if (data.username === "batman" && data.password === "12345") {
      // console.log(data);
      navigate("/dashboard");
    } else {
      alert("Invalid Credential");
    }
  };
  return (
    <div>
      <div className="wrapper fadeInDown my-5">
        <div id="formContent">
          <div className="fadeIn first">
            <img src={logo} id="icon" alt="User Icon" height={80} width={100} />
          </div>

          <form onSubmit={handler}>
            <input
              type="text"
              id="login"
              className="fadeIn second"
              name="username"
              placeholder="Username"
              value={data.username}
              onChange={inputHandler}
            />
            <input
              type="text"
              id="password"
              className="fadeIn third"
              name="password"
              placeholder="password"
              value={data.password}
              onChange={inputHandler}
            />
            <input type="submit" className="fadeIn fourth" value="Log In" />
          </form>

          <div id="formFooter">
            <Link className="underlineHover" to="/CreateUser">
              Create User
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
