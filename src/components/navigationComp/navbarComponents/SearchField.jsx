import React from 'react';
import '../../../css/stylesheet.scss';

const SearchField = () => {

  return (
    <div className="search-box">
      <form>
        <button>
          Search
        </button>
        <input type="text" name="search"/>
      </form>
    </div>
  )
}

export default SearchField;
