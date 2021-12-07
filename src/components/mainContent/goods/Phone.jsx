import React from 'react';
import '../../../css/stylesheet.scss';
import { useParams } from 'react-router-dom';
import { getPhoneData } from '../../../data/data';

export default function Phone({ width }) {

  const handleImageChange = (e) => {
    const src = e.target.src;
    const block = document.getElementById('main-img');
    block.src = src;
  };

  const params = useParams();
  const data = getPhoneData(String(params.nameId));

  const images = (
    <div className="phone-images">
      <div onClick={(e) => handleImageChange(e)}><img src={data.images.first} alt={data.name}/></div>
      <div onClick={(e) => handleImageChange(e)}><img src={data.images.second} alt={data.name}/></div>
      <div onClick={(e) => handleImageChange(e)}><img src={data.images.third} alt={data.name}/></div>
      <div onClick={(e) => handleImageChange(e)}><img src={data.images.forth} alt={data.name}/></div>
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
    <div className="detailed-product-page">

      <header>
        <h1>{data.name}</h1>
      </header>

      <div className="inner-block">

        <div className="image-block">

          {
            width > 767 ? images : false
          }

          <div className="sub-img-block">
            {width < 768 ? <h2>{data.name}</h2> : null}
            <div className="image-container">
              <img id="main-img" src={data.image} alt={data.name}/>
            </div>
          </div>

        </div>

        <div className="description-block">
          <h2>Product information</h2>
            <div className="specifications">
              <dl>
                <dt><span>Screen Size</span></dt>
                <dd>{data.description.display}</dd>
              </dl>
              <dl>
                <dt><span>RAM</span></dt>
                <dd>{data.description.ram}</dd>
              </dl>
              <dl>
                <dt><span>Internal Storage</span></dt>
                <dd>{data.description.internalStorage}</dd>
              </dl>
              <dl>
                <dt><span>Main Camera</span></dt>
                <dd>{data.description.primaryCamera}</dd>
              </dl>
              <dl>
                <dt><span>Battery</span></dt>
                <dd>{data.description.batteryCapacity}</dd>
              </dl>
              <dl>
                <dt><span>Chipset</span></dt>
                <dd>{data.description.processorType}</dd>
              </dl>
              <dl>
                <dt><span>SIM</span></dt>
                <dd>{data.description.simType}</dd>
              </dl>
              <dl>
                <dt><span>Operating System</span></dt>
                <dd>{data.description.operatingSystem}</dd>
              </dl>
              <dl>
                <dt><span>Remote Connection</span></dt>
                <dd>{data.description.remoteConnection}</dd>
              </dl>
              <dl>
                <dt><span>Internet</span></dt>
                <dd>{data.description.internet}</dd>
              </dl>
              <dl>
                <dt><span>Weight</span></dt>
                <dd>{data.description.weight}</dd>
              </dl>
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
