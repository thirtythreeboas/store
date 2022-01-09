import React from 'react';
// import '../../css/stylesheet.scss';
import '../../css/wishlist.scss';

const ListButton = ({ cart, item, removeFromList, addToCartButton }) => {

  const addToCard = () => {
    let match;
    let findMatch = cart.find(i => i.name === item.name ? match = true : match = false)
    return (
      <>
        {
          match
          ?
            <button className="wishlist-list-added">In Cart</button>
          :
            <button
              className="wishlist-list"
              onClick={() => addToCartButton(item)}
            >
              Add to Cart
            </button>
        }
      </>
    );
  }

  return (
    <div className="wishlist-buttons">
      {addToCard()}
      <button
        className="wishlist-remove"
        onClick={() => removeFromList(item)}
      >
        Remove
      </button>
    </div>
  );
};

export default ListButton;
