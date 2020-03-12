import React from "react"
import {Select} from "antd"

const {Option} = Select;
export const REGISTER_JOB_SELECTION = [
  <Option key="java"> java </Option>,
  <Option key="c++"> c++ </Option>,
  <Option key="python"> python </Option>,
  <Option key="machine learning"> machine learning </Option>,
  <Option key="cloud computing"> cloud computing </Option>,
  <Option key="front end developer"> front end developer </Option>,
  <Option key="back end developer"> back end developer </Option>,
  <Option key="Full-stack Engineer"> full stack engineer </Option>,
  <Option key="Account Executive"> account executive </Option>,
  <Option key="Human Resource"> human resource </Option>,
];

export const FULL_TIME_ONLY = 'Full Time Only';
export const FULL_OR_INTERN = 'Full Time or Intern';
export const POSITION_KEY = 'POSITION';
export const GEOLOCATION_OPTIONS = {
  enableHighAccuracy: true,
  maximumAge: 3600000,
  timeout: 27000,
};
export const URL_HOST = 'http://18.144.167.212:8080/Jobplus-server';
export const NEARBY = '/nearby';
export const SEARCH = '/search';
export const PROFILE = '/profile';
export const SAVE = '/save';
export const RECOMMEND = '/recommend';
export const INIT_DATA = [
  {
    "id": "",
    "is_saved": false,
    "type": "",
    "url": "",
    "created_at": "",
    "company": "",
    "company_url": "",
    "location": "",
    "title": "",
    "description": "",
    "how_to_apply": "",
    "company_logo": ""
  }
];

export const INIT_PROFILE = {
  "full_name": "",
  "user_id": "",
  "interests": []
}