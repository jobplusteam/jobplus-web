import React from 'react';
import {Tabs} from 'antd';
import Joblist from './Joblist';
import '../styles/TabContainer.css'
import {jobdata1} from "../constant";

const {TabPane} = Tabs;

class TabContainer extends React.Component {

  state = {
    activeKey: '1'
  }

  componentDidMount() {
    if (this.props.isSearched) {
      this.setState({
        activeKey: '3'
      })
    }
  }

  callback = (key) => {
    this.setState({
      activeKey: key
    })
  }

  // componentWillReceiveProps() {
  //   //console.log(this.props.jobData)
  //   this.setState({
  //     item: this.props.jobData[0]
  //   })
  // }

  render() {
    //console.log(this.props.nearbyJobData)
    return (
      <div className="tab-container">
        {this.props.isLoggedIn ?
          <Tabs onChange={this.callback} type="card" activeKey={this.state.activeKey}>
            <TabPane tab="Nearby Jobs" key="1">
              <Joblist tabName="Nearby Jobs" jobData={this.props.nearbyJobData} isLoggedIn={this.props.isLoggedIn}/>
            </TabPane>
            <TabPane tab="Recommend Jobs" key="2">
              <Joblist tabName = "Recommend Jobs" jobData = {jobdata1} isLoggedIn={this.props.isLoggedIn}/>
            </TabPane>
            <TabPane tab="Searched Jobs" key="3">
              <Joblist tabName="Searched Jobs" jobData={this.props.searchedJobData} isLoggedIn={this.props.isLoggedIn}/>
            </TabPane>
          </Tabs>
          :
          <Tabs onChange={this.callback} type="card" activeKey={this.state.activeKey}>
            <TabPane tab="Nearby Jobs" key="1">
              <Joblist tabName="Nearby Jobs" jobData={this.props.nearbyJobData} isLoggedIn={this.props.isLoggedIn}/>
            </TabPane>
            <TabPane tab="Searched Jobs" key="2">
              <Joblist tabName="Searched Jobs" jobData={this.props.searchedJobData} isLoggedIn={this.props.isLoggedIn}/>
            </TabPane>
          </Tabs>
        }
      </div>
    );
  }
}

export default TabContainer;