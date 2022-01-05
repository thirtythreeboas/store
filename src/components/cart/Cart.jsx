import React from 'react';
import '../../css/stylesheet.scss';

const Cart = () => {
  return (
    <div className="cart-container">
      <div className="empty-cart">
        <h2>Your RainStore Cart is empty</h2>
        <p>Don't miss out on great deals! Start shopping or log in to view products added.</p>
      </div>
    </div>
  )
}

export default Cart;
