import React, { Component } from "react";
import { FaUsers } from "react-icons/fa";
import { Link } from "@reach/router";
class Navigation extends Component {
  render() {
    const { userName , logOutUser} = this.props;

    return (
      <nav className="site-nav family-sans navbar navbar-expand bg-primary navbar-dark higher">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <FaUsers className="mr-1" /> App Name
          </Link>
          <div className="navbar-nav ml-auto">
            {userName && (
              <Link className="nav-item nav-link" to="/dashboard">
              Dashboard
              </Link>
            )}
            {!userName && (
              <Link className="nav-item nav-link" to="/login">
                log in
              </Link>
            )}
            {!userName && (
              <Link className="nav-item nav-link" to="/register">
                register
              </Link>
            )}
            {userName && (
              <Link className="nav-item nav-link" to="/login"
              onClick={e => logOutUser(e)}>
                log out
              </Link>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
