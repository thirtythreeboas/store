import React from 'react';
// uses css of listcard.scss
import '../../../css/stylesheet.scss';
import { Link } from 'react-router-dom';

const ListCard = ({ item, path, addToCartButton, addToList, wishList, cart }) => {

  const listToRender = Object.entries(item.detail).slice(0, 5);

  const css = {
    textDecoration: 'none',
    color: 'black',
    padding: '0px 15px'
  }

  const cssCart = {
    backgroundColor: '#3dbe52',
  }

  const cssList = {
    backgroundColor: '#ffa200',
    color: '#fff'
  }

  const addedInCart = (
    <button style={cssCart} className="cart-btn">In Cart</button>
  );

  const addedInList = (
    <button style={cssList} className="favs">In List</button>
  )

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
            {
              cart.indexOf(item) === -1 ?
                <button
                  className="cart-btn"
                  onClick={() => addToCartButton(item)}
                >
                  Add to Cart
                </button>
              :
                addedInCart
            }
            {
              wishList.indexOf(item) === -1 ?
                <button
                  className="favs"
                  onClick={() => addToList(item)}
                >
                  Add to list
                </button>
              :
                addedInList
            }
          </div>
        </div>

      </div>
    </div>
  );
}

export default ListCard;
