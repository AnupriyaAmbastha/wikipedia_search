import React from 'react';
import SearchResult from './SearchResult';

const SearchResultList = ({data}) => {
  return (
    <div>
      {data.map(resultItem => 
           <SearchResult key={resultItem.title} data={resultItem} />
       )}
    </div>
  );
}

export default SearchResultList;
