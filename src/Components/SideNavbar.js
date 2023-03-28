import React from "react";
import { Component } from "react";
import "../Styles/SideNavbar.css";
// import "../Styles/font.css";
import { Link } from "react-router-dom";

export class SideNavbar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="profile">
          <img
            src="data:image/jpeg;base64,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"
            alt="profile_picture"
          />
          <h3>India</h3>
          <p>Developed Country</p>
        </div>

        <div>
          <ul>
            <li>
              <Link to="/dial" name="dialpad" id="dial">
                <span className="icon">
                  <i className="fa fa-headphones"></i>
                </span>
                <span className="item">Dialpad</span>
              </Link>
            </li>
            <li>
              <Link to="/local" className="" name="localphone" id="local">
                <span className="icon">
                  <i className="fas fa-home"></i>
                </span>
                <span className="item">Local Phone</span>
              </Link>
            </li>

            <li>
              <Link to="/group" name="groups" id="group">
                <span className="icon">
                  <i className="fas fa-user-friends"></i>
                </span>
                <span className="item">Groups</span>
              </Link>
            </li>

            <li>
              <Link to="/phone" name="phonebook" id="phonebook">
                <span className="icon">
                  <i className="fa fa-book"></i>
                </span>
                <span className="item">Phonebook</span>
              </Link>
            </li>

            <li>
              <Link to="/edit" name="logout" id="edit">
                <span className="icon">
                  <i className="fa fa-arrow-right"></i>
                </span>
                <span className="item">Edit</span>
              </Link>
            </li>
            <li>
              <Link href="#" name="logout" id="logout">
                <span className="icon">
                  <i className="fa fa-arrow-right"></i>
                </span>
                <span className="item">Log Out</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
