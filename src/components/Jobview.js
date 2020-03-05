import React, {Component} from 'react';
import "../styles/Jobview.css"
import {INIT_DATA} from "../constant";
import {Button} from "antd"

class Jobview extends Component {
  state = {
    isSaved: false,
    isApplied: false,
  }

  handleClickSave = () => {
    this.setState((prevState, props) => ({
      isSaved: !prevState.isSaved
    }));
  }

  handleClickApply = () => {
    this.setState((prevState, props) => ({
      isApplied: !prevState.isApplied
    }));
  }

  render() {
    console.log(this.props.jobItem);
    const item = this.props.jobItem;
    //console.log(item);
    //console.log("isLoggedIn:", this.props.isLoggedIn);

    if (this.props.noData) {
        return (<div className="job-loading">No job data! Please try again!</div>);
    }
    return (
        <div className="job-view">
            <img src={item.company_logo} className="job-view-logo"/>
            <h1>{item.title}</h1>

            <span className="job-view-jobtype">{item.type}</span>
            {/*<span className="job-view-location">Location: {item.location}</span>*/}
            {
              this.props.isLoggedIn ?
                <div>
                  <Button type="primary" htmlType="submit" ghost={this.state.isSaved ? false : true} onClick={this.handleClickSave} className="save-button" >
                    {this.state.isSaved ? "Saved" : "Save"}
                  </Button>
                  <Button type="primary" htmlType="submit" ghost={this.state.isApplied ? false : true} onClick={this.handleClickApply} className="apply-button">
                    {this.state.isApplied ? "Applied" : "Apply"}
                  </Button>
                </div> :
                  null
            }
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