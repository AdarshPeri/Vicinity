import React from 'react';

const SearchBox = ({searchChange, keyword }) => {
  return (
    <div className='pa2 flex items-center justify-center mr6 mr3-m mr1-s '>
      <input
        className='pa3  br2 ba b--green bg-lightest-blue input-reset hover-bg-black hover-white w-100'
        type='search'
        placeholder={keyword}
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;