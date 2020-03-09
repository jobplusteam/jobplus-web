import React, {Component} from 'react';
import {Profileview} from './Profileview'
import {Tabs} from 'antd';
import "../styles/Myprofile.css";
import {URL_HOST, INIT_DATA} from "../constant";
import Joblist from "./Joblist";

const {TabPane} = Tabs;

class Myprofile extends Component {

  state = {
    savedJobData: INIT_DATA,
    activeKey: '1'
  }

  callback = (key) => {
    this.setState({
      activeKey: key
    })
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
        <div className="my-profile">
          <Tabs onChange={this.callback} type="card" activeKey={this.state.activeKey} className="profile-tabs">
            <TabPane tab="My Profile" key="1">
              <Profileview jobData={this.state.savedJobData}/>
            </TabPane>
            <TabPane tab="Saved Jobs" key="2">
              <Joblist jobData={this.state.savedJobData} isLoggedIn={this.props.isLoggedIn}/>
            </TabPane>
          </Tabs>
        </div>
    );
  }
}

export default Myprofile;

