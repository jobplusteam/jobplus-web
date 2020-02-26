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
                <Input  placeholder="input job title"
                         value = { jobDescription }
                         size={"large"}
                         onChange={ this.handleDescriptionChange }
                         />

                <Input  placeholder="input location"
                         value = { jobLocation }
                         size={"large"}
                         onChange={ this.handleLocationChange}
                         />

                <button className="searchButton" onClick={this.onPressEnter}>Search</button>
            </div>
        );
    }
}

export default Searchbar;