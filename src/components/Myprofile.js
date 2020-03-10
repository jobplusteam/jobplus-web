import React, {Component} from 'react';
import {Profileview} from './Profileview'
import {Tabs} from 'antd';
import "../styles/Myprofile.css";
import {URL_HOST, INIT_DATA, INIT_PROFILE, PROFILE, SAVE} from "../constant";
import Joblist from "./Joblist";

const {TabPane} = Tabs;

class Myprofile extends Component {

  state = {
    savedJobData: INIT_DATA,
    activeKey: '1',
    isLoading: false,
    profileData: INIT_PROFILE
  }

  callback = (key) => {
    if (key === '2') {
      this.fetchData(SAVE);
    }
    this.setState({
      activeKey: key
    })
  }

  fetchData = (url_method) => {
    let url = `${URL_HOST}${url_method}`;
    this.setState({
      isLoading: true
    })
    fetch(url, {
      method: 'GET',
      credentials: 'include',
    }).then((response) => {
      console.log(url);
      return response.json();
    }).then((data) => {
      console.log(data);
      if (url_method === SAVE) {
        this.setState({
          savedJobData: data,
          isLoading: false
        });
      } else if (url_method === PROFILE) {
        this.setState({
          profileData: data,
          isLoading: false
        });
      }
    }).catch((e) => {
      console.log(e.message);
    });
  }

  componentDidMount() {
    this.fetchData(SAVE);
    this.fetchData(PROFILE);
  }

  render() {
    return (
      <div className="my-profile">
        <h2 className="welcome">Welcome {localStorage.getItem("full_name")}</h2>
        {this.state.isLoading ?
          // <div className="loading">Fetching data</div>
          <Tabs onChange={this.callback} type="card" activeKey={this.state.activeKey} className="profile-tabs">
            <TabPane tab="My Profile" key="1" className="profile-tabs1">
              Fetching data...
            </TabPane>
            <TabPane tab="Saved Jobs" key="2" className="profile-tabs2">
              Fetching data...
            </TabPane>
          </Tabs>
          :
          <Tabs onChange={this.callback} type="card" activeKey={this.state.activeKey} className="profile-tabs">
            <TabPane tab="My Profile" key="1">
              <Profileview profileData={this.state.profileData}/>
            </TabPane>
            <TabPane tab="Saved Jobs" key="2">
              <Joblist jobData={this.state.savedJobData} isLoggedIn={this.props.isLoggedIn}/>
            </TabPane>
          </Tabs>
        }
      </div>
    );
  }
}

export default Myprofile;

