import React from 'react';
import { Link } from 'react-router-dom'
import '../../css/stylesheet.scss';

const CartItem = ({ item, width }) => {

  return (
    <div className="cart-item">
      <div className="cart-info">
        <div className="cart-image">
          <Link to={`/${item.category}/${item.name.replace(/\//g, '')}`}>
            <img src={item.image} alt={item.name}/>
          </Link>
        </div>
        <div className="cart-specs">
          <h3>{item.price}</h3>
          <h2><Link to={`/${item.category}/${item.name.replace(/\//g, '')}`}>{item.name}</Link></h2>
          <p>Amount: {item.amount}</p>
        </div>
      </div>
      <div className="cart-buttons">
        <button className="cart-list">Add to List</button>
        <button className="cart-remove">Remove</button>
      </div>
    </div>
  );
}

export default CartItem;
