import React, {Component} from 'react';

import Searchbar from './Searchbar'

class Homepage extends Component {

  fetchSearchResult = ( query ) => {
     fetch(`http://localhost:8080/Search?query=${query}`, {
         method: 'GET',
         headers: {
            //  Authorization: `${AUTH_HEADER} ${token}`,
         },
     }).then((response) => {
         if (response.ok) {
             return response.json();
         }
         throw new Error('Failed to load nearby search');
     }).then((data) => {
         console.log(data);
         this.setState( {isLoadingPosts : false, posts: data ? data: []});
     }).catch((e) => {
         console.log(e.message);
         this.setState( {isLoadingPosts: false, error: e.message});
      });
  }

    handleSelectChange = ( query ) => {
        console.log( query )
        this.fetchSearchResult( query );
    }

  render() {
    return (
        <div>
            <Searchbar handleSelectChange={this.handleSelectChange} />
        </div>
    );
  }
}

export default Homepage;