import React, {Component} from 'react';
import { Input } from 'antd';
import '../styles/Searchbar.css';

const { Search } = Input;

class Searchbar extends Component {
    constructor( props) {
        super( props );
        this.state = {
            query: '',
            result: {},
            loading: false,
            message: ""
        }
    }
    handleOnInputChange = ( event ) => {
        const query = event.target.value;
        this.setState( { query , loading : true, message : ' '})
        this.props.handleSelectChange( query );
    }

    render() {
        const { query } = this.state;
        return (
            <div className="searchbar">

                <Search  placeholder="search your dream job here"
                         value = { query }
                         onChange={ this.handleOnInputChange }
                         enterButton />

            </div>
        );
    }
}

export default Searchbar;