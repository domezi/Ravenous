import React from 'react';
import './App.css';
import BusinessList from '../business-list/BusinessList';
import SearchBar from '../searchbar/SearchBar';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <h1>ravenous</h1>
          <SearchBar />
          <BusinessList />
      </div>
    )
  }
}

export default App;
