import React from 'react';
import '../../../css/stylesheet.scss';
import { useParams } from 'react-router-dom';
import { getBooksData } from '../../../data/data';

export default function Book({ width }) {

  const params = useParams();
  const data = getBooksData(String(params.nameId));
  const books = Object.entries(data.detail);

  const lowScreenButton = (
    <div className="logic-block">
      <div className="button-div">
        <button className="add-to-cart-button">
          <div className="add">Добавить в корзину</div>
          <div className="product-price">{data.price}</div>
        </button>
      </div>
    </div>
  );

  const largeScreenButton = (
    <div className="logic-block">
      <div className="button-div">
        <p className="item-price">Price: {data.price}</p>
        <p className="item-in-stock">{data.inStock}</p>
        <button className="add-to-cart-button">Add to Cart</button>
        <button className="add-to-list">Add to list</button>
      </div>
    </div>
  );

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
          <div className="specifications">
            {
              books.map(([key, value]) => (
                <dl>
                  <dt><span>{key}</span></dt>
                  <dd>{value.toString()}</dd>
                </dl>
              ))
            }
          </div>
        </div>

        {
          width > 767 ? largeScreenButton : lowScreenButton
        }

        {
          width < 768 ? bookDescription : null
        }

      </div>

      {
        width > 768 ? bookDescription : null
      }

    </div>
  );
}
