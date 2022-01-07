import React from 'react';
import '../../css/stylesheet.scss';
import CartItem from './cartItem';


const CartContainer = ({ cart, width }) => {

  const reduceAmount = (a, b) => a + b.amount;
  const reducePrice = (a, b) => a + parseInt(b.price);
  const totalQty = cart.reduce(reduceAmount, 0);
  const totalPrice = cart.reduce(reducePrice, 0);
  
  return (
    <div className="cart-block">
      {
        width < 768 ?
        <h3 className="subtotal">Subtotal: numa</h3>
        :
        null
      }
      <div className="cart-items">
        {
          cart.map(item => (
            <CartItem
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
                <p>{totalPrice}</p>
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
