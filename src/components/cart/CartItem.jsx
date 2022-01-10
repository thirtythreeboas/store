import React from 'react';
import { Link } from 'react-router-dom'
import '../../css/stylesheet.scss';
import CartButton from './CartButton';
import CartInfoSection from './CartInfoSection';

const CartItem = ({ cart, item, addToList, removeFromCart, addToCartButton, removeOne, wishList }) => {

  return (
    <div className="cart-item">
      <CartInfoSection
        cart={cart}
        item={item}
        addToCartButton={addToCartButton}
        removeOne={removeOne}
      />
      <CartButton
        cart={cart}
        wishList={wishList}
        item={item}
        addToList={addToList}
        removeFromCart={removeFromCart}
        addToCartButton={addToCartButton}
        removeOne={removeOne}
      />
    </div>
  );
}

export default CartItem;
