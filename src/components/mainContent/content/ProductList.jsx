import React from 'react';
import '../../../css/stylesheet.scss';
import ListCard from './ListCard'
import { useParams } from 'react-router-dom';
import { getSpecificCategory } from '../../../data/data';

const ProductList = ({ addToCartButton, addToList, cart, wishList }) => {

  const params = useParams();
  const data = getSpecificCategory(String(params.pathName));

  return (
    <div className="product-list-container">
      <div className="list-of-goods">
        {
          data.map(item => (
            <ListCard
              key={item.key + item.name}
              item={item}
              cart={cart}
              wishList={wishList}
              path={params.pathName}
              addToCartButton={addToCartButton}
              addToList={addToList}
            />
          ))
        }
      </div>
    </div>
  );
}

export default ProductList;
