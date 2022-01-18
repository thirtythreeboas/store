import React from 'react';
import '../../../css/stylesheet.scss';

const SearchField = ({ onChange, handleResult, value }) => {

  const css = {
    textDecoration: 'none',
    color: '#fff'
  }

  return (
    <div className="search-box">
      <form>
        <button onClick={e => handleResult(e)}>
          Search
        </button>
        <input type="text" name="search" value={value} onChange={e => onChange(e)}/>
      </form>
    </div>
  )
}

export default SearchField;
