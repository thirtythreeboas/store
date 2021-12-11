import React from 'react';
import '../../../css/stylesheet.scss';
import { useParams } from 'react-router-dom';
import { getMiceData } from '../../../data/data';

export default function Mouse({ width }) {

  const params = useParams();
  const data = getMiceData(String(params.nameId));
  const handleImageChange = (e) => {
    const src = e.target.src;
    const block = document.getElementById('main-img');
    block.src = src;
  };

  const images = (
    <div className="phone-images">
      {
        Object.values(data.images).map(elem =>
          <div onClick={(e) => handleImageChange(e)}>
            <img src={elem} alt={data.name}/>
          </div>
        )
      }
    </div>
  );

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

  return (
    <div className="mouse-container">

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

    </div>
  )
};
