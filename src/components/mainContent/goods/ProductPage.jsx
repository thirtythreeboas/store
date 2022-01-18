import React, { useEffect } from 'react';
import '../../../css/stylesheet.scss';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ImageBlock from './productComponents/ImageBlock';
import DetailBlock from './productComponents/DetailBlock';
import LogicBlock from './productComponents/LogicBlock';
import BookDescription from './productComponents/BookDescription';
import { useParams } from 'react-router-dom';
import { getBooksData } from '../../../data/data';
import { getGoods } from '../../../data/data';

const ProductPage = ({
    width,
    addToCartButton,
    addToList,
    cart,
    wishList
  }) => {

  const params = useParams();
  const goods = getGoods();
  let data;

  for (const product in goods) {
    data = goods[product].find(i => i.name.replace(/\//g, '') === String(params.nameId))
    if (data !== undefined) break;
  }
  const detail = Object.entries(data.detail);
  const title = data.name;

  return (
    <div className="product-page">
      <Helmet>
        <title>{ title }</title>
      </Helmet>
      <header className="product-header">
        <h1>{data.name}</h1>
      </header>
      <div className="product-block">
        <ImageBlock
          data={data}
          width={width}
        />
        <DetailBlock
          detail={detail}
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
      {data.description !== undefined ? <BookDescription data={data} /> : null}
    </div>
  );
}

export default ProductPage;
