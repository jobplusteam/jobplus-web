import React, {Component} from 'react';
import "../styles/Jobview.css"

class Jobview extends Component {
  render() {
    const item = this.props.jobItem;
    return (
      <div className="job-view">
        <img src={item.company_logo} className="job-view-logo"/>
        <h1>{item.title}</h1>

        <span className="job-view-jobtype">{item.type}</span>
        <span className="job-view-location">Location: {item.location}</span>

        <h2>Job Description</h2>
        <div
          dangerouslySetInnerHTML={{__html: item.description}}
          className="job-view-html" />
        <div
          dangerouslySetInnerHTML={{__html: item.how_to_apply}}
          className="job-view-html" />
      </div>
    );
  }
}

export default Jobview;