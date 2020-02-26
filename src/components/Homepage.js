import React, {Component} from 'react';
import {GEOLOCATION_OPTIONS, POSITION_KEY} from "../constant";

import Searchbar from './Searchbar'
import Filter from "./Filter"
import TabContainer from "./TabContainer"
import {jobdata ,jobdata1} from '../constant';

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

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.callAddTab = React.createRef();
    }

    state = {
        loadingGeolocation: false,
        error: null,
        nearbyJobData: '',
        recommendJobData: '',
        searchedJobData: jobdata1,
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

    getGeolocation() {
        this.setState({
            loadingGeolocation: true,
            error: null,
        });
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                this.onGeolocationSuccess,
                this.onGeolocationFailure,
                GEOLOCATION_OPTIONS,
            );
        } else {
            this.setState({
                loadingGeolocation: false,
                error: 'Your browser does not support geolocation.',
            });
        }
    }

    onGeolocationSuccess = (position) => {
        this.setState({
            loadingGeolocation: false,
            error: null,
        })
        console.log(position);
        const { latitude, longitude } = position.coords;
        localStorage.setItem(POSITION_KEY, JSON.stringify({ latitude, longitude }));
    }

    onGeolocationFailure = () => {
        this.setState({
            loadingGeolocation: false,
            error: 'Failed to load geolocation.',
        })
    }

    componentDidMount() {
        this.getGeolocation();
    }

    // searchBar callback function
    handleSelectChange = (query) => {
        console.log(query);
        this.setState({
            searchAction: true
        });
        this.callAddTab.current.add(this.state.searchedJobData);
        //this.fetchSearchResult(query);
    }
    //Filter callback function
    handleFilterChange = (filterKeyWord) => {
        console.log(filterKeyWord)
    }

    render() {
        return (
            <div>
                <Searchbar handleSelectChange={this.handleSelectChange}/>
                <Filter/>
                <TabContainer ref={this.callAddTab}/>
            </div>
        );
    }
}

export default Homepage;