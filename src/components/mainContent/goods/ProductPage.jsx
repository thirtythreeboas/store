import React from 'react';
import '../../../css/stylesheet.scss';

const ProductPage = ({phones}) => {

  return (
    <div className="detailed-product-page">
      <div className="inner-block">

        <div className="image-block">

          <div className="sub-img-block">

            <h2>Honor 7A 2/16GB</h2>
            <div className="">
              <img src="https://avatars.mds.yandex.net/get-mpic/1361544/img_id2422915895010770552.jpeg/9hq" alt="" className=""/>
            </div>

          </div>
        </div>

        <div className="description-block">
          <h2>Коротко о товаре</h2>
            <div className="specifications">
              <dl>
                <dt>Экран</dt>
                <dd>{phones[0].description.display}</dd>
              </dl>
              <dl>
                <dt>Оперативная память</dt>
                <dd>{phones[0].description.ram}</dd>
              </dl>
              <dl>
                <dt>Память</dt>
                <dd>{phones[0].description.internalStorage}</dd>
              </dl>
              <dl>
                <dt>Камера</dt>
                <dd>{phones[0].description.primaryCamera}</dd>
              </dl>
              <dl>
                <dt>Аккумулятор</dt>
                <dd>{phones[0].description.batteryCapacity}</dd>
              </dl>
              <dl>
                <dt>Процессор</dt>
                <dd>{phones[0].description.processorType}</dd>
              </dl>
              <dl>
                <dt>SIM-карты</dt>
                <dd>{phones[0].description.simType}</dd>
              </dl>
              <dl>
                <dt>Операционная система</dt>
                <dd>{phones[0].description.operatingSystem}</dd>
              </dl>
              <dl>
                <dt>Беспроводные интерфейсы</dt>
                <dd>{phones[0].description.remoteConnection}</dd>
              </dl>
              <dl>
                <dt>Интернет</dt>
                <dd>{phones[0].description.internet}</dd>
              </dl>
              <dl>
                <dt>Вес</dt>
                <dd>{phones[0].description.weight}</dd>
              </dl>
          </div>
        </div>

        <div className="logic-block">
          <div className="button-div">
            <button className="add-to-cart-button">
              <div className="add">Добавить в корзину</div>
              <div className="product-price">{phones[0].price}</div>
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProductPage;
