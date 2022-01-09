import React from 'react';
import '../../css/stylesheet.scss';
import CartContainer from './CartContainer';

const Cart = ({ cart, width, removeFromCart, addToList, addToCartButton, removeOne, wishList }) => {

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
          removeOne={removeOne}
          addToList={addToList}
          addToCartButton={addToCartButton}
          removeFromCart={removeFromCart}
          cart={cart}
          wishList={wishList}
          width={width}
        />
      }
    </div>
  )
}

export default Cart;
