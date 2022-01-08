import React from 'react';
import '../../../css/stylesheet.scss';
import { Link } from 'react-router-dom';

export default function Card ({ item, path, addToCartButton, cart }) {

  return (
      <div className="making-margin-right">
        <div className="product-card">
            <Link
              // here we remove forward slashes in item.name to avoid some routing issues
              to={`/${path}/${item.name.replace(/\//g, '')}`}
              style={{textDecoration: 'none'}}
            >
              <div className="image">
                <img src={item.image} alt={item.name}/>
              </div>
              <div className="info">
                <p>{item.price}</p>
                <span title={item.name}>{item.name}</span>
              </div>
            </Link>
            {
              cart.indexOf(item) === -1 ?
              <button
                className="to-cart"
                onClick={() => addToCartButton(item)}
              >
                Add to Card
              </button>
              :
              <button className="in-cart">In Cart</button>
            }
        </div>
      </div>
  )
};
