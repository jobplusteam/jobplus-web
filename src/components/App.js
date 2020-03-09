import React from 'react';
import '../styles/App.css';
import Main from "./Main"
import {URL_HOST} from '../constant';
import TopBar from "./TopBar"

class App extends React.Component {
  state = {
    isLoggedIn: false
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
    fetch(`${URL_HOST}/logout`, {
      // mode: 'no-cors',
      credentials: 'include',
      method: 'GET',
    }).then((response) => {
      localStorage.removeItem("full_name");
      console.log('Logout successful')
    }, (error) => {
      console.log('Error');
    });
  }

  handleLogin = () => {
    fetch(`${URL_HOST}/login`, {
      method: 'GET',
      credentials: 'include'
    }).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);
      if (data.status !== "no session") {
        localStorage.setItem("full_name", data.status);
        this.setState({
          isLoggedIn: true
        })
      }
    });
  }

  componentDidMount() {
    this.handleLogin();
  }

  render() {
    return (
      <div className="App">
        <TopBar isLoggedIn={this.state.isLoggedIn} handleLogout={this.handleLogout}/>
        <Main isLoggedIn={this.state.isLoggedIn} handleLogin={this.handleLogin}/>
      </div>
    );
  }
}

export default App;
