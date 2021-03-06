import React from 'react';
import '../../../css/listcard.scss';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ListCard from './ListCard'
import { useParams } from 'react-router-dom';
import { getSpecificCategory } from '../../../data/data';

const ProductList = ({
    addToCartButton,
    addToList,
    cart,
    wishList
  }) => {

  const params = useParams();
  const data = getSpecificCategory(String(params.pathName));

  return (
    <div className="list-of-goods">
      <Helmet>
        <title>Products</title>
      </Helmet>
      {
        data.map(item => (
          <ListCard
            key={item.key + item.name}
            item={item}
            path={item.category}
            cart={cart}
            wishList={wishList}
            addToCartButton={addToCartButton}
            addToList={addToList}
          />
        ))
      }
    </div>
  );
}

export default ProductList;
