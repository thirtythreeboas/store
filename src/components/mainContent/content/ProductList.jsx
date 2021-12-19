import React from 'react';
import '../../../css/stylesheet.scss';
import Card from './Card';
import { useParams, Link } from 'react-router-dom';
import { getSpecificCategory } from '../../../data/data';

const ListCard = ({ item, path }) => {

  const listToRender = Object.entries(item.detail).slice(0, 5);
  const css = {
    textDecoration: 'none',
    color: 'black'
  }

  return (
    <div className="list-card">

      <div className="list-card-cont">
        <div className="card-info">
          <Link style={css} to={`/${path}/${item.name.replace(/\//g, '')}`}>
            <div className="card-img">
              <img src={item.image} alt={item.name} />
            </div>
          </Link>
            <div className="card-detail">
              <h5>{item.name}</h5>
              <div className="card-specs">
              {
                listToRender.map(([key, value]) => (
                  <dl className="dl-styles" key={value.toString()}>
                    <dt className="dt-styles"><span>{key}</span></dt>
                    <dd className="dd-styles">{value.toString()}</dd>
                  </dl>
                ))
              }
              </div>
            </div>
        </div>

        <div className="get-to-cart">
          <div className="price-block">
            <p className="item-price">Price: {item.price}</p>
            <p className="item-in-stock">{item.inStock}</p>
          </div>
          <div className="cart-block">
            <button className="add-to-cart-button">Add to Cart</button>
            <button className="add-to-list">Add to list</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function ProductList () {

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
              path={params.pathName}
            />
          ))
        }
      </div>
    </div>
  );
}
