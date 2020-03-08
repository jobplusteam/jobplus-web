import React, {Component} from 'react';
import { Input } from 'antd';
import '../styles/Searchbar.css';
import {Button} from "antd"

class Searchbar extends Component {
    constructor( props) {
        super( props );
        this.state = {
            loading: false,
            jobDescription: '',
            jobLocation: '',
            result: {},
        }
    }
    handleDescriptionChange = ( event ) => {
        const description = event.target.value;
        this.setState((prevState, props) => {
            return {
                jobDescription: description
            }
        })
        this.props.handleSelectChange(description);
    }

    handleLocationChange = ( event ) => {
        const location = event.target.value;
        this.setState( {
            jobLocation: location});
        this.props.handleLocationChange(location);
    }

    onPressEnter = () => {
        this.props.handleSearchPress();
    }
    render() {
        const { jobDescription } = this.state;
        const { jobLocation } = this.state;
        return (
            <div className="search-bar">
                <div className="job-description">
                    <h2>Job Description</h2>
                    <Input  placeholder="Filter by title or company"
                            className="job-description-input"
                            value = { jobDescription }
                            size={"large"}
                            onChange={this.handleDescriptionChange}
                            onPressEnter={this.onPressEnter}
                    />
                </div>
                <div className="job-location">
                    <h2>Job Location</h2>
                    <Input  placeholder="Filter by city, state, zip code or country"
                            className="job-location-input"
                            value = { jobLocation }
                            size={"large"}
                            onChange={ this.handleLocationChange}
                            onPressEnter={this.onPressEnter}
                    />
                </div>
                <Button type="primary" htmlType="submit" className="searchButton" onClick={this.onPressEnter}>Search</Button>
            </div>
        );
    }
}

export default Searchbar;