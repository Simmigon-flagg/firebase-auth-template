// Import React
import React, { Component } from 'react';
import { Router, navigate } from '@reach/router';
import firebase from './Firebase';

import Home from './component/Home';
import Welcome from './component/Welcome';
import Navigation from './component/Navigation';
import Login from './component/Login';
import Register from './component/Register';
import Dashboard from './component/Dashboard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      displayName: null,
      userID: null
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(FBUser => {
  
      if (FBUser) {
        this.setState({
          user: FBUser,
          displayName: FBUser.displayName,
          userID: FBUser.uid
        });
      }else{
        this.setState({user:null});
      }
      console.log("Display: "+JSON.stringify(this.state.displayName));
      console.log("User: "+JSON.stringify(this.state.displayName));
      console.log(FBUser);
    });

  }

  registerUser = userName => {
    firebase.auth().onAuthStateChanged(FBUser => {
      FBUser.updateProfile({
        displayName: userName
      }).then(() => {
        this.setState({
          user: FBUser,
          displayName: FBUser.displayName,
          userID: FBUser.uid
        });
        navigate('/dashboard');
      });
    });
  };

  logOutUser = e => {
    e.preventDefault();


    firebase
      .auth()
      .signOut()
      .then(() => {
        this.setState({
          displayName: null,
          userID: null,
          user: null
        });
        navigate('/login');
      });
  };

  render() {
    return (
      <div>
        <Navigation
          userName={this.state.displayName}
          logOutUser={this.logOutUser}

        />
        {this.state.displayName && (
          <Welcome
            userName={this.state.displayName}
            logOutUser={this.logOutUser}
          />
        )}

        <Router>
          <Home path="/" userName={this.state.displayName} />
          <Login path="/login" />
          <Dashboard path="/dashboard" />
          <Register
            path="/register"
            registerUser={this.registerUser}
          />
        </Router>
      </div>
    );
  }
}

export default App;