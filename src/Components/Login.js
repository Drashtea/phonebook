import React from "react";
import { Component } from "react";
import "../Styles/Login.css";
import App from "../App";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router";
import { Routes } from "react-router";
import { SideNavbar } from "./SideNavbar";
import { Table } from "./Table";
import pic from "../Images/fire.png";
import pic1 from "../Images/firetruck.png";
export class Login extends Component {
  state = {
    credential: {
      username: "",
      password: "",
      valid: true,
    },
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username == "shrey" && password == "s1234") {
      let h = document.getElementById("maindiv");
    } else alert("Incorrect username or password");
    console.log(username);
  };
  render() {
    return (
      <div class="maindiv">
        <div className="login_area">
          <div className="fire_title">
            <img src={pic} width="120" />
            <br />
            <h2>Welcome to Fire Department Phonebook</h2>
          </div>
          <div className="username_password_div">
            <form action="#" id="login_form">
              <div className="username_div">
                <label htmlFor="username">
                  <b>Username</b>
                </label>
                <div>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="username"
                    placeholder="Enter username"
                  />
                </div>
              </div>
              <div className="password_div">
                <label htmlFor="password">
                  <b>Password</b>
                </label>
                <div>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="password"
                    placeholder="Enter password"
                  />
                </div>
              </div>
              <button type="submit" id="login_btn" onClick={this.handleSubmit}>
                Login
              </button>
              <br />
              Don't have an account?
              <button id="Register">
                <a href="google.com">Register</a>
              </button>
            </form>
          </div>
        </div>
        <div className="img_area">
          <img src={pic1} />
        </div>
      </div>
    );
  }
}
