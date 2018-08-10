import React, { Component } from "react";
import { Link } from "react-router-dom";


class Nav extends Component {
  render(){
    return (
      <div id="nav">
        <Link className="nav-item" to="/user/register">Register</Link>
        <Link className="nav-item" to="/user/login">Login</Link>
        <Link className="nav-item" to="/home">Home</Link>
      </div>
    )
  }
}

export default Nav;
