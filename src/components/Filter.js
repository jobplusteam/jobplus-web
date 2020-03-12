import React from 'react';
import {Menu, Dropdown, Icon} from 'antd';
import "../styles/Filter.css"
import {FULL_OR_INTERN, FULL_TIME_ONLY} from "../constant"

class Filter extends React.Component {

  state = {
    buttonName: "Select Job type"
  }
  onClick = ({key}) => {
    //message.info(`Now displaying ${key} jobs`);
    this.setState({
      buttonName: key === "Full Time" ? FULL_TIME_ONLY : FULL_OR_INTERN
    });
    this.props.handleFilterSelect(key === "Full Time" ? "true" : "false");
  }

  render() {
    const menu = <Menu onClick={this.onClick}>
      <Menu.Item key="Full Time">{FULL_TIME_ONLY}</Menu.Item>
      <Menu.Item key="Intern">{FULL_OR_INTERN}</Menu.Item>
    </Menu>;

    return (
      <div className="filter">
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            {this.state.buttonName} <Icon type="down"/>
          </a>
        </Dropdown>
      </div>
    );
  }
}

export default Filter;