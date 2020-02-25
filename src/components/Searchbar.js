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

    }
    handEnterPress = () => {
        this.props.handleSelectChange(this.state.query);
    }



    render() {
        const { query } = this.state;
        return (
            <div className="search-bar">
                <Search  placeholder="search your dream job here"
                         value = { query }
                         size={"large"}
                         onChange={ this.handleOnInputChange }
                         onPressEnter={this.handEnterPress}
                         enterButton />
                {/*<button onClick={this.handEnterPress}>Search</button>*/}
            </div>
        );
    }
}

export default Searchbar;