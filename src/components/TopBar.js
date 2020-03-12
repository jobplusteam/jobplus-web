import React, {Component} from 'react';
import logo from "../assets/logo.svg"
import {Icon} from 'antd';
import {Link} from 'react-router-dom';
import '../styles/TopBar.css';


class TopBar extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className="App-title">JobPlus</h1>
        {
          this.props.isLoggedIn ?
            <div>
              <a onClick={this.props.handleLogout} className="logout">
                <Icon type="logout"/>
                {' '}Logout
              </a>
              <Link to="/myprofile">
                <div className="profile">
                  <Icon type="profile"/>
                  {' '}{localStorage.getItem("full_name")}
                </div>
              </Link>
              <Link to="/homepage">
                <div className="home">
                  <Icon type="home"/>
                  {' '}Home
                </div>
              </Link>
            </div>
            :
            <div>
              <Link to="/login">
                <div className="login">
                  <Icon type="login"/>
                  {' '}Login
                </div>
              </Link>
              <Link to="/homepage">
                <div className="home">
                  <Icon type="home"/>
                  {' '}Home
                </div>
              </Link>
            </div>
        }
      </header>
    );
  }
}

export default TopBar;