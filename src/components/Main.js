import React, {Component} from 'react';
import {Register} from "./Register"
import {Login} from "./Login"
import Homepage from "./Homepage"
import Myprofile from "./Myprofile"
import {Route, Redirect, Switch} from 'react-router-dom';
import '../styles/Login.css'

class Main extends Component {

  getHome = () => {
    return <Homepage isLoggedIn={this.props.isLoggedIn} />;
  }

  getLogin = () => {
    return this.props.isLoggedIn ? <Redirect to="/home"/> : <Login handleLogin={this.props.handleLogin}/>;
  }

  getProfile = () => {
    return this.props.isLoggedIn ? <Myprofile isLoggedIn={this.props.isLoggedIn}/> : <Redirect to="/home"/>;
  }

  render() {
    return (
      <div className="main">
        <Switch>
          <Route path="/login" render={this.getLogin}/>
          <Route path="/register" component={Register}/>
          <Route path="/home" component={this.getHome}/>
          <Route path="/myprofile" component={this.getProfile}/>
          <Route component={this.getHome}/>
        </Switch>
      </div>
    );
  }
}

export default Main;