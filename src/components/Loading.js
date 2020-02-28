import React, {Component} from 'react';
import '../styles/Loading.css';

class Loading extends Component {
    render() {
        return (
            <div className="loading-page">
                Fetching Data...
            </div>
        );
    }
}

export default Loading;