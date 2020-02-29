import React, {Component} from 'react';
import '../styles/Loading.css';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

class Loading extends Component {

    state = {
        activeKey: '1'
    }

    callback = (key) => {
        this.setState({
            activeKey: key
        })
    }

    componentDidMount() {
        if (this.props.isSearched) {
            this.setState({
                activeKey: '3'
            })
        }
    }

    render() {
        return (
                <div className="tab-container">
                    <Tabs onChange={this.callback} type="card" activeKey={this.state.activeKey}>
                        <TabPane tab="Nearby Jobs" key="1" className="loading-page1">
                            {this.props.message}
                        </TabPane>
                        {/*<TabPane tab="Recommend Jobs" key="2" className="loading-page2">*/}
                        {/*    {this.props.message}*/}
                        {/*</TabPane>*/}
                        <TabPane tab="Searched Jobs" key="3" className="loading-page3">
                            {this.props.message}
                        </TabPane>
                    </Tabs>
                </div>
        );
    }
}

export default Loading;