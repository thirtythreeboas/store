import React from 'react';
import '../../../css/stylesheet.scss';
import { useParams } from 'react-router-dom';
import { getPhoneData } from '../../../data/data';

export default function PhoneInDetail() {

  const params = useParams();
  const data = getPhoneData(String(params.nameId));


  return (
    <div className="detailed-product-page">

      <div className="inner-block">

        <div className="image-block">

          <div className="sub-img-block">

            <h2>{data.name}</h2>
            <div className="image-container">
              <img src={data.image} alt={data.name}/>
            </div>

          </div>
        </div>

        <div className="description-block">
          <h2>Product information</h2>
            <div className="specifications">
              <dl>
                <dt>Screen Size</dt>
                <dd>{data.description.display}</dd>
              </dl>
              <dl>
                <dt>RAM</dt>
                <dd>{data.description.ram}</dd>
              </dl>
              <dl>
                <dt>Internal Storage</dt>
                <dd>{data.description.internalStorage}</dd>
              </dl>
              <dl>
                <dt>Main Camera</dt>
                <dd>{data.description.primaryCamera}</dd>
              </dl>
              <dl>
                <dt>Battery</dt>
                <dd>{data.description.batteryCapacity}</dd>
              </dl>
              <dl>
                <dt>Chipset</dt>
                <dd>{data.description.processorType}</dd>
              </dl>
              <dl>
                <dt>SIM</dt>
                <dd>{data.description.simType}</dd>
              </dl>
              <dl>
                <dt>Operating System</dt>
                <dd>{data.description.operatingSystem}</dd>
              </dl>
              <dl>
                <dt>Remote Connection</dt>
                <dd>{data.description.remoteConnection}</dd>
              </dl>
              <dl>
                <dt>Internet</dt>
                <dd>{data.description.internet}</dd>
              </dl>
              <dl>
                <dt>Weight</dt>
                <dd>{data.description.weight}</dd>
              </dl>
          </div>
        </div>

        <div className="logic-block">
          <div className="button-div">
            <p className="item-price">Price: {data.price}</p>
            <p className="item-in-stock">{data.inStock}</p>
            <button className="add-to-cart-button">Add to Cart</button>
            <button className="add-to-list">Add to list</button>
          </div>

        </div>

      </div>
    </div>
  )
};


// <div className="button-div">
//   <button className="add-to-cart-button">
//     <div className="add">Добавить в корзину</div>
//     <div className="product-price">{data.price}</div>
//   </button>
// </div>
