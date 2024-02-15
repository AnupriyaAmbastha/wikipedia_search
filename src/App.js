import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import Search from './Search';
import SearchResultList from './SearchResultList';

const App = () => {

const [inputString, setInputString] = useState('')
const [searchResults, setSearchResults] = useState([])

useEffect(() => {
  const getData = setTimeout(() => {
       const wikipediaSearchUrl = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=' + inputString;
       $.ajax({
        url: wikipediaSearchUrl,
        contentType: 'application/json',
        dataType: 'jsonp',
        success: (result) => {
          setSearchResults(result.query.search)
        }
      })
  }, 2000)
  return () => clearTimeout(getData)
}, [inputString])

    return (
      <div className="App container">
        <h1>Wikipedia Viewer</h1>
        <Search setString={setInputString} />
        <SearchResultList data={searchResults} />
      </div>
    );
}

export default App;
