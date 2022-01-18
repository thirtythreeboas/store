import React from 'react';
import '../../../../css/listcard.scss';

const CardInfo = ({
    cart,
    item,
    wishList,
    addToCartButton,
    addToList
  }) => {

  const addedInCart = <button className="cart-btn cart-btn-added">In Cart</button>

  const addedInList = <button className="favs favs-added">In List</button>

  return (
    <div className="get-to-cart">
      <div className="price-block">
        <p className="item-price">{`Price: ${item.price}`}</p>
        <p className="item-in-stock">{item.inStock}</p>
      </div>
      <div className="cart-block">
        {
          cart.indexOf(item) === -1 ?
            <button
              className="cart-btn"
              onClick={() => addToCartButton(item)}
            >
              Add to Cart
            </button>
          :
            addedInCart
        }
        {
          wishList.indexOf(item) === -1 ?
            <button
              className="favs"
              onClick={() => addToList(item)}
            >
              Add to list
            </button>
          :
            addedInList
        }
      </div>
    </div>
  );
}

export default CardInfo;
