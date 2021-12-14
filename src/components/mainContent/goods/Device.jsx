import React from 'react';
import '../../../css/stylesheet.scss';
import { useParams } from 'react-router-dom';
import { getDevicesData } from '../../../data/data';

export default function Device({ width }) {

  const handleImageChange = (e) => {
    const src = e.target.src;
    const block = document.getElementById('main-img');
    block.src = src;
  };

  const params = useParams();
  const data = getDevicesData(String(params.nameId));
  const devices = Object.entries(data.detail);

  const images = (
    <div className="product-images">
      {
        Object.values(data.images).map(elem =>
          <div onClick={(e) => handleImageChange(e)}>
            <img src={elem} alt={data.name}/>
          </div>
        )
      }
    </div>
  );

  const lowScreenButton = (
    <div className="button-div">
      <button className="add-to-cart-button">
        <div className="add">Добавить в корзину</div>
        <div className="product-price">{data.price}</div>
      </button>
    </div>
  );

  const largeScreenButton = (
    <div className="button-div">
      <p className="item-price">Price: {data.price}</p>
      <p className="item-in-stock">{data.inStock}</p>
      <button className="add-to-cart-button">Add to Cart</button>
      <button className="add-to-list">Add to list</button>
    </div>
  );


  return (
    <div className="product-page">

      <header className="product-header">
        <h1>{data.name}</h1>
      </header>

      <div className="product-block">

        <div className="image-block">

          {
            width > 767 ? images : false
          }

          <div className="sub-image-block">
            {width < 768 ? <h2>{data.name}</h2> : null}
            <div className="image-container">
              <img id="main-img" src={data.image} alt={data.name}/>
            </div>
          </div>

        </div>

        <div className="detail-block">
          <h2>Product information</h2>
            <div className="specifications">
              {
                devices.map(([key, value]) => (
                  <dl>
                    <dt><span>{key}</span></dt>
                    <dd>{value.toString()}</dd>
                  </dl>
                ))
              }
          </div>
        </div>

        <div className="logic-block">
          {
            width > 767 ? largeScreenButton : lowScreenButton
          }
        </div>

      </div>
    </div>
  )
};