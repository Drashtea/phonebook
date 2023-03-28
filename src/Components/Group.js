import React from "react";
import { Component } from "react";
import "../Styles/Group.css";

export class Group extends Component {
  render() {
    return (
      <div className="table-container-1">
        <h1>Group Management</h1>
        {/* <div>
          <label>Group By:</label>
          <span>
            <div className="dropdown div-head">
              <button className="dropbtn div-head">Group</button>
              <div className="dropdown-content">
                <a href="#">Personal</a>
                <a href="#">Family</a>
                <a href="#">Office</a>
              </div>
            </div>
          </span>

          <label>Search:</label>
          <input type="text" />
          <button className="button_search" type="button" aria-setsize="th">
            Search
          </button>
        </div> */}
        <hr />
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Group Name</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>DANDIABAZAR</td>
              <td>
                <input type="button" value="Edit-Group" />
              </td>
            </tr>
            <tr>
              <td>POLICE</td>
              <td>
                <input type="button" value="Edit-Group" />
              </td>
            </tr>
            <tr>
              <td>GEB</td>
              <td>
                <input type="button" value="Edit-Group" />
              </td>
            </tr>
            <tr>
              <td>GSFC</td>
              <td>
                <input type="button" value="Edit-Group" />
              </td>
            </tr>
            <tr>
              <td>GAJRAWADI</td>
              <td>
                <input type="button" value="Edit-Group" />
              </td>
            </tr>
            <tr>
              <td>PANIGATE</td>
              <td>
                <input type="button" value="Edit-Group" />
              </td>
            </tr>
            <tr>
              <td>GIDC</td>
              <td>
                <input type="button" value="Edit-Group" />
              </td>
            </tr>
            <tr>
              <td>OTHERS</td>
              <td>
                <input type="button" value="Edit-Group" />
              </td>
            </tr>
          </tbody>
        </table>
        <button className="btn btn-primary grp_btn">Add Group</button>
      </div>
    );
  }
}
