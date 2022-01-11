import React from 'react';
import '../../../css/stylesheet.scss';

const BookDescription = ({ data }) => {
  return (
    <div className="book-desc-block">
      <header className="desc-header">
        <h2>Description</h2>
      </header>
      <div>
        <p>{data.description}</p>
      </div>
    </div>
  );
}

export default BookDescription;
