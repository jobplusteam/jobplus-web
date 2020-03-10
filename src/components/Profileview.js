import React, {Component} from 'react';
import {List} from 'antd';
import '../styles/Profileview.css';

export class Profileview extends Component {

  render() {
    const interests = this.props.profileData.interests;
    const full_name = [this.props.profileData.full_name];
    const user_id = [this.props.profileData.user_id];
    return (
      <div className="profile-view">
        <div className="profile-form">
          <h3 style={{marginBottom: 16}}>Full Name</h3>
          <List
            bordered
            dataSource={full_name}
            renderItem={item => (
              <List.Item className="list-item">
                {item}
              </List.Item>
            )}
          />
          <h3 style={{marginBottom: 16}}>User ID</h3>
          <List
            bordered
            dataSource={user_id}
            renderItem={item => (
              <List.Item>
                {item}
              </List.Item>
            )}
          />
          <h3 style={{marginBottom: 16}}>Interests</h3>
          <List
            bordered
            dataSource={interests}
            renderItem={item => (
              <List.Item>
                {item}
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }
}
