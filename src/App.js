import React, { Component } from 'react';
import Reddit from './util/Reddit';
import Feed from './Components/Feed/Feed';
import Layout from './Containers/Layout/Layout';


class App extends Component {
  state =  {
    posts: [],
    searchTerm: ""
  }

  componentDidMount() {
    this.handleSubredditSearch('all')
  }

  handleSubredditSearch = (term) => {
    Reddit.fetchSubreddit(term).then(result => {
      this.setState({posts: result})
      return
    });
  }

  handleSearchInput = (term) => {
    this.setState({searchTerm: term.target.value})
  }

  render() {
    
    
    return (
      <div>
        <Layout>
          <h1>Lurker Reddit App</h1>
          {/* display an element for each post */}
          {/* Search bar */}
          <input value={this.state.searchTerm} onChange={this.handleSearchInput}/>
          <button onClick={() => this.handleSubredditSearch(this.state.searchTerm)}>Click</button>
          <Feed posts={this.state.posts}/>
          {/* <Feed posts={this.handleSubredditSearch()}/> */}
        </Layout>

      </div>
    )
  }
}

export default App;
