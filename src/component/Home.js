import React, { Component } from "react";
import { Link } from "@reach/router";

class Home extends Component {
  render() {
    const { user } = this.props;

    const biggerLead = {
      fontSize: 1.4 + "em",
      fontWeight: 200,
    };

    return (
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-10 col-md-10 col-lg-8 col-xl-7">
            <div
              className="display-4 text-primary mt-3 mb-2"
              style={{
                fontSize: 2.8 + "em",
              }}
            >
              App Name
            </div>
            <p className="lead" style={biggerLead}>
              This is a Single Page Application which includes an auth{" "}
              <a href="https://firebase.google.com">Firebase</a> connection and{" "}
              <a href="https://reactjs.org/">React</a> routing.
              With this application you are able to login logout and register users for "App Name"
            </p>

            {user == null && (
              <span>
                <Link to="/register" className="btn btn-outline-primary mr-2">
                  Register
                </Link>
                <Link to="/login" className="btn btn-outline-primary mr-2">
                  Log In
                </Link>
              </span>
            )}
            {user && (
              <Link to="/dashboard" className="btn btn-primary">
                Dashboard
              </Link>
            )}
          </div>{" "}
          {/* columns */}
        </div>
      </div>
    );
  }
}

export default Home;
