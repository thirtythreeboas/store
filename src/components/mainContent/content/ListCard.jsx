import React from 'react';
// uses css of listcard.scss
import '../../../css/stylesheet.scss';
import { Link } from 'react-router-dom';

const ListCard = ({ cart, item, path, addToCartButton, addToList, wishList }) => {

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
            <button
              className="cart-btn"
              onClick={() => addToCartButton(item)}
            >
              Add to Cart
            </button>
            <button
              className="favs"
              onClick={() => addToList(item)}
            >
              Add to list
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ListCard;
