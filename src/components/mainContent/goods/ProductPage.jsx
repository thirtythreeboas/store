import React from 'react';
import '../../../css/stylesheet.scss';
import { useParams } from 'react-router-dom';
import { getPhoneData } from '../../../data/data';

const ProductPage = () => {
  const params = useParams();
  const data = getPhoneData(params.nameId);
  console.log(typeof params.nameId);
  return (
    <div className="detailed-product-page">
      <div className="inner-block">
      {params.nameId}
      </div>
    </div>
  )
}

export default ProductPage;

// <div className="image-block">
//
//   <div className="sub-img-block">
//
//     <h2>func.name</h2>
//     <div className="">
//       <img src="https://avatars.mds.yandex.net/get-mpic/1361544/img_id2422915895010770552.jpeg/9hq" alt="" className=""/>
//     </div>
//
//   </div>
// </div>
//
// <div className="description-block">
//   <h2>Коротко о товаре</h2>
//     <div className="specifications">
//       <dl>
//         <dt>Экран</dt>
//         <dd>{func.description.display}</dd>
//       </dl>
//       <dl>
//         <dt>Оперативная память</dt>
//         <dd>{func.description.ram}</dd>
//       </dl>
//       <dl>
//         <dt>Память</dt>
//         <dd>{func.description.internalStorage}</dd>
//       </dl>
//       <dl>
//         <dt>Камера</dt>
//         <dd>{func.description.primaryCamera}</dd>
//       </dl>
//       <dl>
//         <dt>Аккумулятор</dt>
//         <dd>{func.description.batteryCapacity}</dd>
//       </dl>
//       <dl>
//         <dt>Процессор</dt>
//         <dd>{func.description.processorType}</dd>
//       </dl>
//       <dl>
//         <dt>SIM-карты</dt>
//         <dd>{func.description.simType}</dd>
//       </dl>
//       <dl>
//         <dt>Операционная система</dt>
//         <dd>{func.description.operatingSystem}</dd>
//       </dl>
//       <dl>
//         <dt>Беспроводные интерфейсы</dt>
//         <dd>{func.description.remoteConnection}</dd>
//       </dl>
//       <dl>
//         <dt>Интернет</dt>
//         <dd>{func.description.internet}</dd>
//       </dl>
//       <dl>
//         <dt>Вес</dt>
//         <dd>{func.description.weight}</dd>
//       </dl>
//   </div>
// </div>
//
// <div className="logic-block">
//   <div className="button-div">
//     <button className="add-to-cart-button">
//       <div className="add">Добавить в корзину</div>
//       <div className="product-price">{func.price}</div>
//     </button>
//   </div>
// </div>
