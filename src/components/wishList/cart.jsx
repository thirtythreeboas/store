import React from 'react';
import '../../css/stylesheet.scss';
import CartItem from './cartItem';
import CartContainer from './cartContainer';

const Cart = ({ cart, width }) => {

  // const totalSum = cart.reduce()

  return (
    <div className="cart-container">
      {
        cart.length === 0 ?
          <div className="empty-cart">
            <h2>Your RainStore Cart is empty</h2>
            <p>Don't miss out on great deals! Start shopping or log in to view products added.</p>
          </div>
        :
        <CartContainer
          cart={cart}
          width={width}
        />
      }
    </div>
  )
}

export default Cart;
