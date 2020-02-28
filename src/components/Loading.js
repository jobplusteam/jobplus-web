import React, {Component} from 'react';
import '../styles/Loading.css';

class Loading extends Component {

    render() {
        return (
            <div className="loading-page">
                {this.props.message}
            </div>
        );
    }
}

export default Loading;