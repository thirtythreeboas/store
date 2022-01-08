import React from 'react';
import '../../css/stylesheet.scss';
import CartItem from './cartItem';


const CartContainer = ({ cart, width, addToList, removeFromCart }) => {


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
    <div className="cart-block">
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
              addToList={addToList}
              removeFromCart={removeFromCart}
              key={item.key + item.price}
              item={item}
              width={width}
            />
          ))
        }
      </div>

      <div className="purchase-cont">
        <div className="cart-one">
          <button className="purchase">Proceed to checkout</button>
        </div>
        {
          width >= 768 ?
          <div className="cart-two">
            <h3>Your Cart</h3>
            <div className="amount-total">
              <div>
                <p>Quantity:</p>
                <p>{totalQty}</p>
              </div>
              <div>
                <p>Subtotal:</p>
                <p>{sumTotalPrice()}</p>
              </div>
            </div>
          </div>
          :
          null
        }
      </div>
    </div>
  )
}

export default CartContainer;
