import React from 'react';
import '../../../css/stylesheet.scss';
import ImageBlock from './ImageBlock';
import DetailBlock from './DetailBlock';
import LogicBlock from './LogicBlock';
import { useParams } from 'react-router-dom';
import { getPhoneData } from '../../../data/data';

const Phone = ({
    width,
    addToCartButton,
    addToList,
    cart,
    wishList
  }) => {

  const params = useParams();
  const data = getPhoneData(String(params.nameId));
  const phones = Object.entries(data.detail);

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
          phones={phones}
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

export default Phone;
