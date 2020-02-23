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
    item: ''
  }

  componentDidMount() {
    this.setState({
      item: this.props.jobData[0]
    })
  }

  render() {
    const tab = this.props.tabName;
    const jobData = this.props.jobData;
    const datalist = [];
    for (let i = 0; i < this.props.jobData.length; i++) {
      datalist.push(
        {
          title: jobData[i].title,
          logo: jobData[i].company_logo,
          description: jobData[i].description,
          company: jobData[i].company
        }
      )
    }
    return (

      <div className="job-list">
        <div className="job-list-item">
          <h2>{`${tab} Jobs`}</h2>
          <List
            itemLayout="horizontal"
            dataSource={datalist}
            renderItem={item => (
              <List.Item
                className="job-item"
                onClick={() => {
                  this.setState({
                    item: item
                  })
                }}>
                <List.Item.Meta
                  //avatar={<img className="job-logo" src={item.logo}/>}
                  title={item.title}
                  description={item.company}
                />
              </List.Item>
            )}
          />
        </div>
        <Jobview jobItem={this.state.item}/>
      </div>

    );
  }
}

export default Joblist;