import React from 'react';
import {Link} from 'react-router-dom';
import {URL_HOST} from "../constant"
import '../styles/Login.css';
import {Form, Icon, Input, Button, message} from 'antd';

class NormalLoginForm extends React.Component {

  handleSubmit = e => {
    e.preventDefault();
    let lastResponse;
    let username;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        username = values.username;
        fetch(`${URL_HOST}/login`, {
          method: 'POST',
          credentials: 'include',
          body: JSON.stringify({
            user_id: values.username,
            password: values.password,
          }),
        }).then((response) => {

          lastResponse = response;
          return response.text();
        }, (error) => {
          console.log('Error');
        }).then((text) => {
          let data = JSON.parse(text);
          if (lastResponse.ok) {
            localStorage.setItem("user_id", username);
            message.success('Login success!');
            this.props.handleLogin();
          } else {
            message.error(data.status);
          }
        });
      }
    });
  };

  render() {
    console.log("1234567")
    const {getFieldDecorator} = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{required: true, message: 'Please input your username!'}],
          })(
            <Input
              prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{required: true, message: 'Please input your Password!'}],
          })(
            <Input
              prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <Link to="/register">register now!</Link>
        </Form.Item>
      </Form>
    );
  }
}

export const Login = Form.create({name: 'normal_login'})(NormalLoginForm);