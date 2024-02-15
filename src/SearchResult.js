import React from 'react';

const SearchResult = ({data}) => {
 const link = 'https://en.wikipedia.org/wiki/' + data.title;
  return (
    <div className='well'>
      <h3><a target='_blank' href={link}>{data.title}</a></h3>
      <h5 dangerouslySetInnerHTML={{__html: data.snippet}} />
    </div>
  );
}

export default SearchResult;
