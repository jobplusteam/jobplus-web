import React, {Component} from 'react';
import "../styles/Jobview.css"

class Jobview extends Component {
  render() {
    return (
      <div className="job-view">
        <img src={this.props.jobItem.logo} className="job-view-logo"/>
        <div
          dangerouslySetInnerHTML={{__html: this.props.jobItem.description}}
          className="job-view-html" />
      </div>
    );
  }
}

export default Jobview;