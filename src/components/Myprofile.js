import React, {Component} from 'react';
import logo from '../logo.svg';
import {Profileview} from './Profileview'
import {URL_HOST} from "../constant";

class Myprofile extends Component {

  state = {
    savedJobData: []
  }

  fetchSavedJobs = () => {
    let url = `${URL_HOST}/save`;
    fetch(url, {
      method: 'GET',
      credentials: 'include',
    }).then((response) => {
      console.log(url);
      return response.json();
    }).then((data) => {
      console.log(data);
      this.setState({savedJobData: data});
    }).catch((e) => {
      console.log(e.message);
    });
  }

  componentDidMount() {
    this.fetchSavedJobs();
  }

  render() {
    return (
        <div>
            <Profileview jobData={this.state.savedJobData}/>
        </div>
    );
  }
}

export default Myprofile;

