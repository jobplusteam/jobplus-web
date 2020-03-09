import React from "react"
import {Select} from "antd"
const {Option} = Select;
export const REGISTER_JOB_SELECTION = [
    <Option key="Full-stack Engineer"> full stack Engineer </Option>,
    <Option key="Account Executive"> account executive </Option>,
    <Option key="Machine Learning Engineer"> machine learning engineer </Option>,
    <Option key="Software Engineer"> software engineer </Option>,
    <Option key="Front-End Web Developer"> front end developer </Option>,
    <Option key="Algorithm Engineer"> algorithm engineer </Option>,
    <Option key="Backend Web Developer"> back end developer </Option>,
    <Option key="Python Developer"> python developer </Option>,
    <Option key="Lawyer"> lawyer </Option>,
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
export const URL_HOST = 'http://localhost:8080/Jobplus';
export const NEARBY = '/nearby';
export const SEARCH = '/search';
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