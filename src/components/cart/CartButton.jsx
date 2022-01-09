import React from 'react';
import '../../css/stylesheet.scss';

const CartButton = ({ cart, item, addToList, removeFromCart, addToCartButton, removeOne, wishList }) => {

  const addToListBtn = () => {
    // let index = wishList.indexOf(item);
    // console.log(cart);
    let match;
    let findMatch = wishList.find(i => i.name === item.name ? match = true : match = false)

    return (
      <>
        {
          match
          ?
            <button className="cart-list-added">In List</button>
          :
            <button
              className="cart-list"
              onClick={() => addToList(item)}
            >
              Add to List
            </button>
        }
      </>
    );
 }

  return (
    <div className="cart-buttons">
      {addToListBtn()}
      <button
        className="cart-remove"
        onClick={() => removeFromCart(item)}
      >
        Remove
      </button>
    </div>
  );
};

export default CartButton;
