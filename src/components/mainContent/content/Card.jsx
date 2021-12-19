import React from 'react';
import '../../../css/stylesheet.scss';
import { Link } from 'react-router-dom';

export default function Card ({ item, path }) {

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
            <button className="to-cart">В корзину</button>
        </div>
      </div>
  )
};
