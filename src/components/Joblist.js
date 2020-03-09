import React, {Component} from 'react';
import {List} from 'antd';
import "../styles/Joblist.css";
import Jobview from "./Jobview"

/**
 * props needed:
 * 1. jobData -> json array object data
 * 2. tabName -> which tab the data is from?
 *      ("Nearby", "Recommend", "Searched", "Applied", "Liked")
 */
class Joblist extends Component {
  state = {
    item: this.props.jobData,
    hasData: false
  }

  constructor(props) {
    super(props);
    this.index = 1;

  }

  componentDidMount() {
    this.setState({
      item: this.props.jobData[0]
    })
    //console.log(this.props.jobData);
  }

  componentWillReceiveProps() {
    setTimeout(() => {
      this.setState({
        item: this.props.jobData[0]
      })
    }, 1)
  }


  render() {
    const tab = this.props.tabName;
    let index = 1;
    return (
      <div className="job-list">
        <div className="job-list-item">
          <h2>{tab}</h2>
          <List
            itemLayout="horizontal"
            dataSource={this.props.jobData}
            renderItem={item => (
              <List.Item
                id={index++}
                className='job-item'
                onClick={(event) => {
                  this.setState({
                    item: item,
                  });
                }}>
                <List.Item.Meta
                  title={item.title}
                  description={item.company}
                />
              </List.Item>
            )}
          />
        </div>
        <Jobview
          jobItem={this.state.item}
          noData={this.props.jobData.length === 0 || this.props.jobData[0].id === ""}
          isLoggedIn={this.props.isLoggedIn}
        />
      </div>
    );
  }
}

export default Joblist;