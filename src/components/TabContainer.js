import React from 'react';
import { Tabs } from 'antd';
import Joblist from './Joblist';
import '../styles/TabContainer.css'

const { TabPane } = Tabs;

class TabContainer extends React.Component {

    state = {
        // panes: [
        //     { title: 'Nearby Jobs', content: this.props.nearbyJobData, key: '1', closable: false},
        //     { title: 'Recommend Jobs', content: this.props.searchedJobData, key: '3', closable: false},
        //     { title: 'Searched Jobs', content: this.props.searchedJobData, key: '2', closable: false}
        // ],
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
            {/*<Tabs*/}
            {/*    onChange={this.onChange}*/}
            {/*    activeKey={this.state.activeKey}*/}
            {/*    type="editable-card"*/}
            {/*    onEdit={this.onEdit}*/}
            {/*    hideAdd={true}*/}
            {/*>*/}
            {/*    {this.state.panes.map(pane => (*/}
            {/*        <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>*/}
            {/*            <Joblist tabName = {pane.title} jobData = {pane.content} />*/}
            {/*        </TabPane>*/}
            {/*    ))}*/}
            {/*</Tabs>*/}
          </div>
        );
    }
}


export default TabContainer;