import React from "react";
import { Component } from "react";
import "../Styles/phonebook.css";
export class Phonebook extends Component {
  render() {
    return (
      <div className="editdiv">
        <div className="container mt-3">
          <div>
            <span>
              <br />
            </span>
          </div>
          <form>
            <div className="row jumbotron box8">
              <div className="col-sm-12 mx-t3 mb-4">
                <h2 className="text-center text-info">Phonebook Management</h2>
              </div>
              <div className="col-sm-6 form-group">
                <label htmlFor="name-f">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="fname"
                  id="name-f"
                  placeholder="Enter your first name."
                  required
                />
              </div>
              <div className="col-sm-6 form-group">
                <label htmlFor="name-l">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  name="lname"
                  id="name-l"
                  placeholder="Enter your last name."
                  required
                />
              </div>
              <div className="col-sm-6 form-group">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  className="form-control"
                  name="company"
                  id="company"
                  placeholder="Enter Company Name"
                  required
                />
              </div>
              <div className="col-sm-6 form-group">
                <label htmlFor="dept">Department</label>
                <input
                  type="text"
                  className="form-control"
                  name="dept"
                  id="dept"
                  placeholder="Enter Department Name"
                  required
                />
              </div>
              <div className="col-sm-6 form-group">
                <label htmlFor="job">Job</label>
                <input
                  type="text"
                  className="form-control"
                  name="job"
                  id="job"
                  placeholder="Enter Job"
                />
              </div>
              <div className="col-sm-6 form-group">
                <label htmlFor="job-t">Job Title</label>
                <input
                  type="text"
                  className="form-control"
                  name="jobtitle"
                  id="job-t"
                  placeholder="Enter Job Title"
                />
              </div>
              <div className="col-sm-6 form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Enter your email."
                />
              </div>
              <div className="col-sm-6 form-group">
                <label htmlFor="work-add">Work</label>
                <input
                  type="address"
                  className="form-control"
                  name="workadd"
                  id="work-add"
                  placeholder="Add your work address"
                />
              </div>
              <div className="col-sm-6 form-group">
                <label htmlFor="home-add">Home</label>
                <input
                  type="address"
                  className="form-control"
                  name="homeadd"
                  id="home-add"
                  placeholder="Add your home address"
                />
              </div>
              <div className="col-sm-4 form-group">
                <label htmlFor="State">State</label>
                <input
                  type="address"
                  className="form-control"
                  name="State"
                  id="State"
                  placeholder="Enter your state name."
                  required
                />
              </div>
              <div className="col-sm-2 form-group">
                <label htmlFor="zip">Postal-Code</label>
                <input
                  type="zip"
                  className="form-control"
                  name="Zip"
                  id="zip"
                  placeholder="Postal-Code."
                  required
                />
              </div>
              <div className="col-sm-6 form-group">
                <label htmlFor="Date">Date Of Birth</label>
                <input
                  type="Date"
                  name="dob"
                  className="form-control"
                  id="Date"
                  placeholder=""
                  required
                />
              </div>
              <div className="col-sm-6 form-group">
                <label htmlFor="sex">Gender</label>
                <select
                  id="sex"
                  className="form-control browser-default custom-select"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="unspesified">Unspecified</option>
                </select>
              </div>

              <div className="col-sm-6 form-group">
                <label htmlFor="tel">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  className="form-control"
                  id="tel"
                  placeholder="Enter Your Contact Number."
                  required
                />
              </div>

              <div className="col-sm-6 form-group">
                <label htmlFor="group">Groups</label>

                <div className="form-check form-check-inline ">
                  <div className="col-sm-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="option1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="inlineCheckbox1"
                    >
                      Group1
                    </label>
                  </div>
                  <div className="col-sm-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="option1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="inlineCheckbox1"
                    >
                      Group1
                    </label>
                  </div>
                  <div className="col-sm-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="option1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="inlineCheckbox1"
                    >
                      Group1
                    </label>
                  </div>
                </div>

                <div className="form-check form-check-inline ">
                  <div className="col-sm-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="option1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="inlineCheckbox1"
                    >
                      Group1
                    </label>
                  </div>
                  <div className="col-sm-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="option1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="inlineCheckbox1"
                    >
                      Group1
                    </label>
                  </div>
                  <div className="col-sm-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="option1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="inlineCheckbox1"
                    >
                      Group1
                    </label>
                  </div>
                </div>

                <div className="form-check form-check-inline ">
                  <div className="col-sm-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="option1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="inlineCheckbox1"
                    >
                      Group1
                    </label>
                  </div>
                  <div className="col-sm-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="option1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="inlineCheckbox1"
                    >
                      Group1
                    </label>
                  </div>
                  <div className="col-sm-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="option1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="inlineCheckbox1"
                    >
                      Group1
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 form-group mb-0 text-center">
                {/* <hr style={"border-top: 3px double #8c8b8b"} /> */}
                <hr />
                <button className="btn btn-primary phonebook">Save</button>
                <button className="btn btn-primary phonebook">
                  Save and Apply
                </button>
                <button className="btn btn-primary">Reset</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
