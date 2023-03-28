import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/Dialer.css";
export class Dialer extends Component {
  render() {
    return (
      <div className="Dialer">
        <div className="header">Click To Dial</div>
        <div className="number">
          <label htmlFor="Account">Account</label>
          <select id="Account">
            <option>Account1</option>
            <option>Account2</option>
          </select>
        </div>
        <div className="number">
          <label htmlFor="Dial_number">Dial Number</label>
          <input id="Dial_number" />
          <button className="btn btn-primary">Dial</button>
        </div>
        <hr />
        <div className="Lines">
          <label>LINE1</label>
          <label className="Line_status">Idle</label>
        </div>
        <div className="Lines">
          <label>LINE2</label>
          <label className="Line_status">Idle</label>
        </div>
      </div>
    );
  }
}
