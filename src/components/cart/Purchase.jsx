import React from 'react';
import '../../css/stylesheet.scss';

const Purchase = ({ width, totalQty, sumTotalPrice  }) => {

  return (
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
  );
}

export default Purchase;
