import React from 'react';
import '../../../css/stylesheet.scss';
import ImageBlock from './ImageBlock';
import DetailBlock from './DetailBlock';
import LogicBlock from './LogicBlock';
import BookDescription from './BookDescription';
import { useParams } from 'react-router-dom';
import { getBooksData } from '../../../data/data';

const Book = ({
    width,
    addToCartButton,
    addToList,
    cart,
    wishList
  }) => {

  const params = useParams();
  const data = getBooksData(String(params.nameId));
  const books = Object.entries(data.detail);

  return (
    <div className="product-page">
      <header className="product-header">
        <h1>{data.name}</h1>
      </header>
      <div className="product-block">
        <ImageBlock
          data={data}
          width={width}
        />
        <DetailBlock
          phones={books}
        />
        <LogicBlock
          cart={cart}
          wishList={wishList}
          data={data}
          width={width}
          addToCartButton={addToCartButton}
          addToList={addToList}
        />
        {width < 768 ? <BookDescription data={data} /> : null}
      </div>
      {width > 768 ? <BookDescription data={data} /> : null}
    </div>
  );
}

export default Book;
