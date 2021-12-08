import React from 'react';
import '../../../css/stylesheet.scss';
import { useParams } from 'react-router-dom';
import { getBooksData } from '../../../data/data';

export default function Book({ width }) {

  const params = useParams();
  const data = getBooksData(String(params.nameId));

  // CSS and HTML of code below copy pasted from PHONE.JSX and PHONE.SCSS
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
  // CSS and HTML of code below copy pasted from PHONE.JSX and PHONE.SCSS
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
    <div className="book-main-container">

      <header className="main-header">
        <h1>{data.name}</h1>
      </header>

      <div className="book-details">


        <div className="img-content">
          <div className="subimg">
            {width < 768 ? <h2>{data.name}</h2> : null}
            <div className="book-img">
              <img src={data.image} alt={data.name} />
            </div>
          </div>
        </div>

        <div className="book-description">
          <h2>Product information</h2>
          <div className="lala">
            <dl>
              <dt><span>Author</span></dt>
              <dd>{data.author}</dd>
            </dl>
            <dl>
              <dt><span>Cover</span></dt>
              <dd>{data.coverType}</dd>
            </dl>
            <dl>
              <dt><span>Language</span></dt>
              <dd>{data.language}</dd>
            </dl>
            <dl>
              <dt><span>Print length</span></dt>
              <dd>{data.printLength}</dd>
            </dl>
            <dl>
              <dt><span>Weigth</span></dt>
              <dd>{data.weight}</dd>
            </dl>
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
