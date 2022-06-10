import React from "react";
import { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ul className="nav">
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">More</li>
          <li className="nav-item"><a>Contact Us</a></li>
        </ul>
      </div>
    );
  }
}

export default Header;
