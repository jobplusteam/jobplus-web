import React from 'react';
import { Tabs } from 'antd';
import Joblist from './Joblist';
import {jobdata} from '../constant';
import '../styles/TabContainer.css'

const { TabPane } = Tabs;

class TabContainer extends React.Component {
    constructor(props) {
        super(props);
        this.newTabIndex = 0;
        //this.onChange = this.onChange.bind(this);
        const panes = [
            { title: 'Nearby Jobs', content: 'Nearby Jobs', key: '1', closable: false},
            { title: 'Recommend Jobs', content: 'Recommend Jobs', key: '2', closable: false },
            {
                title: 'Search Jobs',
                content: 'Content of Tab 3',
                key: '3'
            },
        ];
        this.state = {
            activeKey: panes[0].key,
            tabName: panes[0].title,
            panes,
        };
    }

    onChange = (activeKey) => {
        this.setState({ activeKey: activeKey});
        console.log(activeKey);
    };


    onEdit = (targetKey, action) => {
        this[action](targetKey);
    };

    add = () => {
        const { panes } = this.state;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: 'Search Jobs', content: 'Search Jobs', key: activeKey });
        this.setState({ panes, activeKey });
    };

    remove = targetKey => {
        let { activeKey } = this.state;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
            if (lastIndex >= 0) {
                activeKey = panes[lastIndex].key;
            } else {
                activeKey = panes[0].key;
            }
        }
        this.setState({ panes, activeKey });
    };



    render() {
        return (
          <div className="tab-container">
            <Tabs
                onChange={this.onChange}
                activeKey={this.state.activeKey}
                type="editable-card"
                onEdit={this.onEdit}
                hideAdd={true}
                size={"large"}
            >
                {this.state.panes.map(pane => (
                    <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
                        <Joblist tabName = {pane.title} jobData = {jobdata} />
                    </TabPane>
                ))}
            </Tabs>
          </div>
        );
    }
}

export default TabContainer;