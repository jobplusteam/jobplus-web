import React, {Component} from 'react';
import {List} from 'antd';
import "../styles/Joblist.css";
import Jobview from "./Jobview"
import {INIT_DATA} from "../constant";

/**
 * props needed:
 * 1. jobData -> json array object data
 * 2. tabName -> which tab the data is from?
 *      ("Nearby", "Recommend", "Searched", "Applied", "Liked")
 */
class Joblist extends Component {
  state = {
      item: INIT_DATA,
      hasData: false
  }

  constructor(props) {
    super(props);
    this.index = 1;

  }

  componentDidMount() {
      console.log(this.props.jobData)
      if (this.props.jobData) {
          this.setState({
              item: this.props.jobData[0]
          })
      }
  }

  render() {
    const tab = this.props.tabName;
    const jobData = this.props.jobData;
    const datalist = [];
    let index = 1;
    if (this.props.jobData.length > 0) {
        for (let i = 0; i < this.props.jobData.length; i++) {
            datalist.push(jobData[i])
        }
    }
    return (
      <div className="job-list">
        <div className="job-list-item">
          <h2>{tab}</h2>
          <List
            itemLayout="horizontal"
            dataSource={datalist}
            renderItem={item => (
              <List.Item
                id={index++}
                className='job-item'
                onClick={(event) => {
                  this.setState({
                    item: item,
                  });
                  // const node = event.target;
                  // node.className +=" active";
                  // console.log(node);
                }}>
                <List.Item.Meta
                  title={item.title}
                  description={item.company}
                />
              </List.Item>
            )}
          />
        </div>
        <Jobview jobItem={this.state.item} noData={this.props.jobData.length === 0 || this.props.jobData[0].id === ""}/>
      </div>
    );
  }
}

export default Joblist;