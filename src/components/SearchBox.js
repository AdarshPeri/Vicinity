import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2 flex items-center justify-end'>
      <input
        className='pa3 ba b--green bg-lightest-blue '
        type='search'
        placeholder='Search By Keyword'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;