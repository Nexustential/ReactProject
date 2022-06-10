import React from "react";
import { Component } from "react";
import { NavLink } from "react-router-dom";

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="col m-1">
                <p><strong>*Company statement goes here*</strong></p>
            </div>
            <div className="col-6 m-1">
                <p><a>Contact Us</a><a>Meet Our Team!</a></p>
            </div>
            <div className="col-4">
                <p>Established 2022</p>
            </div>
        </div>
      </div>
    );
  }
}

export default Footer;
