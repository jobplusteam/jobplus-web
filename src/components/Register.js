import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {URL_HOST, TEMP_API, REGISTER_JOB_SELECTION} from "../constant";
import {
  Form,
  Input,
  Button,
  message,
  Select,
} from 'antd';
import '../styles/Register.css'


class RegistrationForm extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = e => {
    e.preventDefault();
    let lastResponse;
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        fetch(`${TEMP_API}/signup`, {
          method: 'POST',
          body: JSON.stringify({
            username: values.username,
            password: values.password,
          }),
        }).then((response) => {
          lastResponse = response;
          return response.text();
        }, (error) => {
          console.log('Error');
        }).then((text) => {
          if (lastResponse.ok) {
            message.success(text);
            this.props.history.push('/login');
          } else {
            message.error(text);
          }
        });
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };



  handleChange(value) {
    console.log(`selected ${value}`);
  }


  render() {
      const { getFieldDecorator } = this.props.form;
      const { Option } = Select;
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      };

      return (
        <div>
          <Form {...formItemLayout} onSubmit={this.handleSubmit} className="register-form">
            <Form.Item label="Username">
              {getFieldDecorator('username', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ],
              })(<Input />)}
          </Form.Item>
            <Form.Item label="Password" hasFeedback>
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                  {
                    validator: this.validateToNextPassword,
                  },
                ],
              })(<Input.Password />)}
            </Form.Item>
            <Form.Item label="Confirm Password" hasFeedback>
              {getFieldDecorator('confirm', {
                rules: [
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                  {
                    validator: this.compareToFirstPassword,
                  },
                ],
              })(<Input.Password onBlur={this.handleConfirmBlur} />)}
            </Form.Item>
            <Form.Item label="First Name">
              {getFieldDecorator('firstname', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your first name!',
                  },
                ],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Last Name">
              {getFieldDecorator('lastname', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your last name!',
                  },
                ],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Job Description">
              {getFieldDecorator('job description', {
                rules: [
                  {
                    required: true,
                    message: 'Please choose your job!',
                  },
                ],
              })(
              <Select
                  mode="multiple"
                  style={{ width: '100%' }}
                  placeholder="Please select"
                  onChange={this.handleChange}
              >
                {REGISTER_JOB_SELECTION}
              </Select>)}
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
              <div>
                I already have an account, go back to <Link to="/login">login</Link>
              </div>
            </Form.Item>
          </Form>
        </div>
      );
    }
}

export const Register = Form.create({ name: 'register' })(RegistrationForm);