import React from 'react';
import '../../../css/stylesheet.scss';
import Button from './button';
import { useParams } from 'react-router-dom';
import { getPhoneData } from '../../../data/data';

export default function Phone({ width, addToCartButton, addToList, cart, wishList }) {

  const handleImageChange = (e) => {
    const src = e.target.src;
    const block = document.getElementById('main-img');
    block.src = src;
  };

  const params = useParams();
  const data = getPhoneData(String(params.nameId));
  const phones = Object.entries(data.detail);

  const images = (
    <div className="product-images">
      {
        Object.values(data.images).map(elem =>
          <div key={elem} onClick={e => handleImageChange(e)}>
            <img src={elem} alt={data.name}/>
          </div>
        )
      }
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

          {
            width < 767 ? images : false
          }

        </div>

        <div className="detail-block">
          <h2>Product information</h2>
            <div className="specifications">
              {
                phones.map(([key, value]) => (
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

      </div>
    </div>
  )
};
