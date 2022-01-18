import React, { useState, useEffect } from 'react';
import '../../../css/listcard.scss';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import ListCard from './ListCard';
import { getGoods } from '../../../data/data';
import { getSpecificCategory } from '../../../data/data';

const SearchResult = ({
    cart,
    wishList,
    addToCartButton,
    addToList,
    content,
    value
  }) => {

  return (
    <div className="list-of-goods">
      <Helmet>
        <title>RainStore: {value}</title>
      </Helmet>
      {
        content.map(item => (
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

export default SearchResult;
