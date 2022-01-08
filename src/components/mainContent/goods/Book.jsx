import React from 'react';
import '../../../css/stylesheet.scss';
import Button from './button';
import { useParams } from 'react-router-dom';
import { getBooksData } from '../../../data/data';

export default function Book({ width, addToCartButton, addToList, cart, wishList }) {

  const params = useParams();
  const data = getBooksData(String(params.nameId));
  const books = Object.entries(data.detail);

  const bookDescription = (
    <div className="book-desc-block">
      <header className="desc-header">
        <h2>Description</h2>
      </header>
      <div>
        <p>{data.description}</p>
      </div>
    </div>
  );

  return (
    <div className="product-page">

      <header className="product-header">
        <h1>{data.name}</h1>
      </header>

      <div className="product-block">


        <div className="image-block">
          <div className="sub-image-block">
            {width < 768 ? <h2>{data.name}</h2> : null}
            <div className="image-container">
              <img src={data.image} alt={data.name} />
            </div>
          </div>
        </div>

        <div className="detail-block">
          <h2>Product information</h2>
          <div className="book-specs">
            {
              books.map(([key, value]) => (
                <dl className="dl-styles" key={value.toString()}>
                  <dt className="dt-styles"><span>{key}</span></dt>
                  <dd className="dd-styles">{value.toString()}</dd>
                </dl>
              ))
            }
          </div>
        </div>

        <div className="logic-block">
          <Button
            cart={cart}
            wishList={wishList}
            data={data}
            width={width}
            addToCartButton={addToCartButton}
            addToList={addToList}
          />
        </div>

        {width < 768 ? bookDescription : null}

      </div>

      {width > 768 ? bookDescription : null}

    </div>
  );
}
