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
      body: JSON.stringify({
        //user_id: localStorage.getItem("user_id"),
        job_id: this.props.jobItem.id,
        is_save: this.props.jobItem.is_saved
      }),
    }).then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.result === "SAVE") {
          message.success("Save Job Successfully!");
        } else if (data.result === "UNSAVE") {
          message.success("UnSave Job Successfully!");
        } else {
          message.error(data.status);
        }
      }).catch((error) => {
      console.log(error);
    });

    this.setState((prevState, props) => ({
      isSaved: !prevState.isSaved
    }));
  }

  render() {
    //console.log(this.props.jobItem.id);
    const item = this.props.jobItem;


    if (this.props.noData) {
      return (<div className="job-loading">No job data! Please try again!</div>);
    }
    return (
      <div className="job-view">
        <img src={item.company_logo} className="job-view-logo"/>
        <h1>{item.title}</h1>

        <span className="job-view-jobtype">{item.type}</span>
        {
          this.props.isLoggedIn ?
            <div>
              <Button
                type="primary"
                htmlType="submit"
                ghost={!this.props.jobItem.is_saved}
                onClick={this.handleClickSave} className="save-button">
                {this.props.jobItem.is_saved ? "Saved" : "Save"}
              </Button>
            </div> : null
        }
        <h2>Job Description</h2>
        <div
          dangerouslySetInnerHTML={{__html: item.description}}
          className="job-view-html"/>
        <div
          dangerouslySetInnerHTML={{__html: item.how_to_apply}}
          className="job-view-html"/>
      </div>
    );
  }
}

export default Jobview;