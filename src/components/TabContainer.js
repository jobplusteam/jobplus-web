import React from 'react';
import { Tabs } from 'antd';
import Joblist from './Joblist';
import '../styles/TabContainer.css'

const { TabPane } = Tabs;

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

    render() {
        console.log(this.props.nearbyJobData)
        return (
          <div className="tab-container">
              <Tabs onChange={this.callback} type="card" activeKey={this.state.activeKey}>
                  <TabPane tab="Nearby Jobs" key="1">
                      <Joblist tabName = "Nearby Jobs" jobData = {this.props.nearbyJobData} />
                  </TabPane>
                  {/*<TabPane tab="Recommend Jobs" key="2">*/}
                  {/*    <Joblist tabName = "Recommend Jobs" jobData = {this.props.searchedJobData} />*/}
                  {/*</TabPane>*/}
                  <TabPane tab="Searched Jobs" key="3">
                      <Joblist tabName = "Searched Jobs" jobData = {this.props.searchedJobData} />
                  </TabPane>
              </Tabs>
          </div>
        );
    }
}


export default TabContainer;