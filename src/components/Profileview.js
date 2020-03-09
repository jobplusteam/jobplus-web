import React, {Component} from 'react';
import {Form, Input} from 'antd';
import '../styles/Profileview.css';
import {URL_HOST} from '../constant';


export class Profileview extends Component {
  componentDidMount() {
    const register_url = `${URL_HOST}${'/register'}?first_name='kang'`
    fetch(register_url, {
      method: 'GET',
      headers: {},
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Failed to log information');
    }).then((data) => {
      console.log(data);
    }).catch((e) => {
      console.log("error");
    })
  }

  render() {
    const layout = {
      labelCol: {span: 8},
      wrapperCol: {span: 16},
    };

    const validateMessages = {
      required: 'This field is required!',
      types: {
        email: 'Not a validate email!',
        number: 'Not a validate number!',
      },
      number: {
        range: 'Must be between ${min} and ${max}',
      },
    };
    const onFinish = values => {
      console.log(values);
    };
    let index = 1;
    return (
      <div className="profile-view">
        <div className="profile-personInfo">
          <h2 className="welcome">Welcome, xxx</h2>
          <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
            <Form.Item name={['user', 'Username']} label="Username" rules={[{required: true}]}>
              <Input defaultValue={"jiangkang"} disabled={true}/>
            </Form.Item>
            <Form.Item name={['user', 'Firstname']} label="Firstname" rules={[{required: true}]}>
              <Input defaultValue={"kang"} disabled={true}/>
            </Form.Item>
            <Form.Item name={['user', 'Lastname']} label="Lastname">
              <Input defaultValue={"jiang"} disabled={true}/>
            </Form.Item>
            <Form.Item name={['user', 'Interest']} label="Interest">
              <Input defaultValue={"jiang"} disabled={true}/>
            </Form.Item>
            <Form.Item wrapperCol={{...layout.wrapperCol, offset: 8}}>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}
