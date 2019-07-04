import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2 flex items-center justify-end mr6 mr3-m mr1-s'>
      <input
        className='pa3 br2 ba b--green bg-lightest-blue input-reset  hover-bg-black hover-white w-100'
        type='search'
        placeholder='Search By Keyword'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;