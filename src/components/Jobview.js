import React, {Component} from 'react';
import "../styles/Jobview.css"
import {Button, message} from "antd"
import {URL_HOST} from "../constant";

class Jobview extends Component {
  state = {
    isSaved: false,
    isApplied: false,
  }

  handleClickSave = () => {
    this.props.jobItem.is_saved = !this.props.jobItem.is_saved;
    fetch(`${URL_HOST}/save`, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        job_id: this.props.jobItem.id,
        is_save: this.props.jobItem.is_saved
      }),
    }).then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.message === "successful!") {
          message.success(`${data.result} ${data.message}`);
        } else if (data.result === "failed!") {
          message.error(`${data.result} ${data.message}`);
        }
      }).catch((error) => {
        message.error("Save job error!")
      console.log(error);
    });

    this.setState((prevState, props) => ({
      isSaved: !prevState.isSaved
    }));
  }

  render() {
    const item = this.props.jobItem;
    if (this.props.noData) {
      return (<div className="job-loading">No job data!</div>);
    }
    return (
      <div className="job-view">

        <img src={item.company_logo} className="job-view-logo"/>
        <h2>{item.title}</h2>
        <p><a href={item.company_url} target="_blank">{item.company}</a></p>
        <span className="job-view-jobtype">Type: {item.type}</span>
        <span className="job-view-location">Location: {item.location}</span>
        {
          this.props.isLoggedIn ?
            <div className="job-view-btn">
              <Button
                type="primary"
                htmlType="submit"
                ghost={!this.props.jobItem.is_saved}
                onClick={this.handleClickSave} className="save-button">
                {this.props.jobItem.is_saved ? "Saved" : "Save"}
              </Button>
              <Button
                type="primary"
                htmlType="button"
                ghost={true}
                href={this.props.jobItem.url}
                target="_blank"
                className="save-button">
                {"Apply From GitHub"}
              </Button>
            </div> : null
        }<h2>How to apply:</h2>
        <div
          dangerouslySetInnerHTML={{__html: item.how_to_apply}}
          className="job-view-html"/>
        <h2>Job Description</h2>
        <div
          dangerouslySetInnerHTML={{__html: item.description}}
          className="job-view-html"/>

      </div>
    );
  }
}

export default Jobview;