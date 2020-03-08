import React from 'react';
import '../styles/App.css';
import Main from "./Main"
import {TOKEN_KEY, URL_HOST} from '../constant';
import TopBar from "./TopBar"
import {Redirect} from "react-router-dom"

class App extends React.Component{

  state = {
    isLoggedIn: Boolean(localStorage.getItem(TOKEN_KEY)),
    user_id: "",
  }

  handleLogin = (token, username) => {
    localStorage.setItem(TOKEN_KEY, token);
    this.setState({
      isLoggedIn: true,
      user_id: username,
    });
    console.log("UserId: ",this.state.user_id);
  }

  handleLogout = () => {
    localStorage.removeItem(TOKEN_KEY);
    this.setState({
      isLoggedIn: false,
      user_id: "",
    });
    fetch(`${URL_HOST}/logout`, {
      mode:'no-cors',
      method: 'GET',
      }).then((response) => {
      console.log('Logout successful')
    }, (error) => {
      console.log('Error');
    });
    this.forceUpdate()
  }

  render() {
    return (
        <div className="App">
          <TopBar isLoggedIn={this.state.isLoggedIn} handleLogout={this.handleLogout} />
          <Main isLoggedIn={this.state.isLoggedIn} user_id={this.state.user_id} handleLogin={this.handleLogin}  />
        </div>
    );
  }
}

export default App;
