import React from 'react';
import '../../css/stylesheet.scss';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import CartContainer from './cartComponents/CartContainer';

const Cart = ({ cart, width, removeFromCart, addToList, addToCartButton, removeOne, wishList }) => {

  return (
    <div className="cart-container">
      <Helmet>
        <title>Cart</title>
      </Helmet>
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
