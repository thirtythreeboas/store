import React from 'react';
import '../../../css/stylesheet.scss';
import { useParams } from 'react-router-dom';
import { getPhoneData } from '../../../data/data';

export default function PhoneInDetail() {

  const params = useParams();
  const data = getPhoneData(parseInt(params.nameId, 10));

  return (
    <div className="detailed-product-page">
      <div className="inner-block">

      <div className="image-block">

        <div className="sub-img-block">

          <h2>{data.name}</h2>
          <div className="image-container">
            <img src={data.image} alt=""/>
          </div>

        </div>
      </div>

      <div className="description-block">
        <h2>Коротко о товаре</h2>
          <div className="specifications">
            <dl>
              <dt>Экран</dt>
              <dd>{data.description.display}</dd>
            </dl>
            <dl>
              <dt>Оперативная память</dt>
              <dd>{data.description.ram}</dd>
            </dl>
            <dl>
              <dt>Память</dt>
              <dd>{data.description.internalStorage}</dd>
            </dl>
            <dl>
              <dt>Камера</dt>
              <dd>{data.description.primaryCamera}</dd>
            </dl>
            <dl>
              <dt>Аккумулятор</dt>
              <dd>{data.description.batteryCapacity}</dd>
            </dl>
            <dl>
              <dt>Процессор</dt>
              <dd>{data.description.processorType}</dd>
            </dl>
            <dl>
              <dt>SIM-карты</dt>
              <dd>{data.description.simType}</dd>
            </dl>
            <dl>
              <dt>Операционная система</dt>
              <dd>{data.description.operatingSystem}</dd>
            </dl>
            <dl>
              <dt>Беспроводные интерфейсы</dt>
              <dd>{data.description.remoteConnection}</dd>
            </dl>
            <dl>
              <dt>Интернет</dt>
              <dd>{data.description.internet}</dd>
            </dl>
            <dl>
              <dt>Вес</dt>
              <dd>{data.description.weight}</dd>
            </dl>
        </div>
      </div>

      <div className="logic-block">
        <div className="button-div">
          <button className="add-to-cart-button">
            <div className="add">Добавить в корзину</div>
            <div className="product-price">{data.price}</div>
          </button>
        </div>
      </div>

      </div>
    </div>
  )
};
