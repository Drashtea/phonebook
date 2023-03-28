import React from "react";
import { Component } from "react";
import "../Styles/Table.css";

export class Table extends Component {
  render() {
    return (
      <div className="phonediv">
        <h1>Local PhoneBook</h1>
        <div>
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
        </div>
        <hr />
        <div className="table-container">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">FirstName</th>
                <th scope="col">LastName</th>
                <th scope="col">Phone Number</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Drashti</td>
                <td>Kathiriya</td>
                <td>2345678911</td>
                <td>
                  <input type="button" value="Edit-Contact" />
                </td>
              </tr>
              <tr>
                <td>Priya</td>
                <td>patel</td>
                <td>2234567890</td>
                <td>
                  <input type="button" value="Edit-Contact" />
                </td>
              </tr>
              <tr>
                <td>Priya</td>
                <td>patel</td>
                <td>2234567890</td>
                <td>
                  <input type="button" value="Edit-Contact" />
                </td>
              </tr>
              <tr>
                <td>Priya</td>
                <td>patel</td>
                <td>2234567890</td>
                <td>
                  <input type="button" value="Edit-Contact" />
                </td>
              </tr>
              <tr>
                <td>Priya</td>
                <td>patel</td>
                <td>2234567890</td>
                <td>
                  <input type="button" value="Edit-Contact" />
                </td>
              </tr>
              <tr>
                <td>Priya</td>
                <td>patel</td>
                <td>2234567890</td>
                <td>
                  <input type="button" value="Edit-Contact" />
                </td>
              </tr>
              <tr>
                <td>Priya</td>
                <td>patel</td>
                <td>2234567890</td>
                <td>
                  <input type="button" value="Edit-Contact" />
                </td>
              </tr>
              <tr>
                <td>Priya</td>
                <td>patel</td>
                <td>2234567890</td>
                <td>
                  <input type="button" value="Edit-Contact" />
                </td>
              </tr>
              <tr>
                <td>Priya</td>
                <td>patel</td>
                <td>2234567890</td>
                <td>
                  <input type="button" value="Edit-Contact" />
                </td>
              </tr>
              <tr>
                <td>Priya</td>
                <td>patel</td>
                <td>2234567890</td>
                <td>
                  <input type="button" value="Edit-Contact" />
                </td>
              </tr>
              <tr>
                <td>Priya</td>
                <td>patel</td>
                <td>2234567890</td>
                <td>
                  <input type="button" value="Edit-Contact" />
                </td>
              </tr>
              <tr>
                <td>Priya</td>
                <td>patel</td>
                <td>2234567890</td>
                <td>
                  <input type="button" value="Edit-Contact" />
                </td>
              </tr>
              <tr>
                <td>Priya</td>
                <td>patel</td>
                <td>2234567890</td>
                <td>
                  <input type="button" value="Edit-Contact" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button className="btn btn-primary add_contact_btn">Add Contact</button>
        <button className="btn btn-primary delete_contact_btn">
          Delete Contact
        </button>
      </div>
    );
  }
}
