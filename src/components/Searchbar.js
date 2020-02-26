import React, {Component} from 'react';
import { Input } from 'antd';
import '../styles/Searchbar.css';


class Searchbar extends Component {
    constructor( props) {
        super( props );
        this.state = {
            jobDescription: '',
            jobLocation: '',
            result: {},
            loading: false,
            message: ""
        }
    }
    handleDescriptionChange = ( event ) => {
        const jobDescription = event.target.value;
        this.setState( { jobDescription , loading : true, message : ' '})

    }

    handleLocationChange = ( event ) => {
        const jobLocation = event.target.value;
        this.setState( { jobLocation , loading : true, message : ' '})
    }

    onPressEnter = () => {
        this.props.handleSelectChange(this.state.jobDescription, this.state.jobLocation);
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
                            onChange={ this.handleDescriptionChange }
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
                <button className="searchButton" onClick={this.onPressEnter}>Search</button>
            </div>
        );
    }
}

export default Searchbar;