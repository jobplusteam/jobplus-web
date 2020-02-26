import React, {Component} from 'react';

import Searchbar from './Searchbar'
import Filter from "./Filter"
import TabContainer from "./TabContainer"


/**
 *   1. data from children: (searchBar and filter need callback function from homepage)
 *      a. user input keywords from SearchBar
 *      b. filter keywords from filter
 *      c. everytime get data change from children, need to fetch new data from back end
 *   2. data from parents:
 *      a. isLoggedin ? if user loggedin, need to fetch both recommend data and nearby, otherwise, fetch only nearby data
 *   3. data pass to children:
 *      a. Default: pass nearby data to tabContainer
 *      b. if user logged in, pass recommend data to tabContainer
 *      c. if user searched, pass searched data to tabContainer
 */

class Homepage extends Component{
  state = {
    nearbyJobData: '',
    recommendJobData: '',
    searchedJobData: ''
  }

  // fetchSearchResult = ( query ) => {
  //    fetch(`http://localhost:8080/Search?query=${query}`, {
  //        method: 'GET',
  //        headers: {
  //           //  Authorization: `${AUTH_HEADER} ${token}`,
  //        },
  //    }).then((response) => {
  //        if (response.ok) {
  //            return response.json();
  //        }
  //        throw new Error('Failed to load nearby search');
  //    }).then((data) => {
  //        console.log(data);
  //        this.setState( {isLoadingPosts : false, posts: data ? data: []});
  //    }).catch((e) => {
  //        console.log(e.message);
  //        this.setState( {isLoadingPosts: false, error: e.message});
  //     });
  // }
    // searchBar callback function
    handleSelectChange = (jobDescription, jobLocation) => {
        console.log(jobDescription);
        console.log(jobLocation);
        //this.fetchSearchResult( query );
    }
    //Filter callback function
    // handleFilterChange = (filterKeyWord) => {
    //   console.log(filterKeyWord)
    // }


  render() {
    return (
        <div>
            <Searchbar handleSelectChange={this.handleSelectChange()} />
            <Filter />
            <TabContainer />
        </div>
    );
  }
}

export default Homepage;