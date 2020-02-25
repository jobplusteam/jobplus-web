import React from 'react';
import { Menu, Dropdown, Icon, message } from 'antd';

class Filter extends React.Component {

    onClick = ({ key }) => {
        message.info(`Now displaying ${key} jobs`);
    }

    render() {
        const menu = <Menu onClick={this.onClick}>
                        <Menu.Item key="Full Time">Full Time</Menu.Item>
                        <Menu.Item key="Intern">Intern</Menu.Item>
                    </Menu>;
                    
        return(
            <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    Select Job type <Icon type="down" />
                </a>
            </Dropdown>
        );
    }
}

export default Filter;