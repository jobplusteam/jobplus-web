import React from 'react';
import '../styles/App.css';
import Main from "./Main"
import {TOKEN_KEY, URL_HOST} from '../constant';
import TopBar from "./TopBar"

class App extends React.Component{
  state = {
    isLoggedIn: localStorage.getItem("user_id") !== null
  }

  handleLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
    localStorage.removeItem("user_id");
    fetch(`${URL_HOST}/logout`, {
      mode:'no-cors',
      method: 'GET',
      }).then((response) => {
      console.log('Logout successful')
    }, (error) => {
      console.log('Error');
    });
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
