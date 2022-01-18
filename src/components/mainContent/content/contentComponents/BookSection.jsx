import React from 'react';
import '../../../../css/stylesheet.scss';
import Card from './Card';

const BookSection = ({ data, cart, addToCartButton }) => {
  const booksList = data.goods.books.slice(0, 6);

  return (
    <div className="book-section">
      <div className="section-header">
        <h2>Books</h2>
      </div>
      <div className="goods">
        <div className="products">
          {
            booksList.map(item => (
              <Card
                key={item.key + item.name}
                cart={cart}
                item={item}
                path="books"
                addToCartButton={addToCartButton}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default BookSection;
