import React from 'react';
import '../../css/stylesheet.scss';
import CartItem from './CartItem';
import Purchase from './Purchase';

const CartContainer = ({ cart, width, addToList, removeFromCart, addToCartButton, removeOne, wishList }) => {

  const sumTotalPrice = () => {
    if (cart.length !== 0) {
      let reducePrice = (a, b) => a + b;
      let sum = cart.map(i => i.amount * parseInt(Math.round(i.price)));
      return sum.reduce(reducePrice, 0);
    }
  }

  const reduceAmount = (a, b) => a + b.amount;
  const totalQty = cart.reduce(reduceAmount, 0);


  return (
    <div className="cart-section">
      {
        width < 768 ?
        <h3 className="subtotal">
          <span>Subtotal: {sumTotalPrice()}</span>
          <span>Qty: {totalQty}</span>
        </h3>
        :
        null
      }
      <div className="cart-items">
        {
          cart.map(item => (
            <CartItem
              removeOne={removeOne}
              cart={cart}
              wishList={wishList}
              addToList={addToList}
              addToCartButton={addToCartButton}
              removeFromCart={removeFromCart}
              key={item.key + item.price}
              item={item}
              width={width}
            />
          ))
        }
      </div>
      <Purchase
        width={width}
        totalQty={totalQty}
        sumTotalPrice={sumTotalPrice}
      />
    </div>
  )
}

export default CartContainer;
