import React from 'react';
import '../../../css/stylesheet.scss';
import ImageBlock from './ImageBlock';
import DetailBlock from './DetailBlock';
import LogicBlock from './LogicBlock';
import { useParams } from 'react-router-dom';
import { getDevicesData } from '../../../data/data';

const Device = ({
    width,
    addToCartButton,
    addToList,
    cart,
    wishList
  }) => {

  const params = useParams();
  const data = getDevicesData(String(params.nameId));
  const devices = Object.entries(data.detail);

  return (
    <div className="product-page">
      <header className="product-header">
        <h1>{data.name}</h1>
      </header>
      <div className="product-block">
        <ImageBlock
          data={data}
          width={width}
        />
        <DetailBlock
          phones={devices}
        />
        <LogicBlock
          cart={cart}
          wishList={wishList}
          data={data}
          width={width}
          addToCartButton={addToCartButton}
          addToList={addToList}
        />
      </div>
    </div>
  )
};

export default Device;
