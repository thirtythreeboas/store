import React from 'react';
// import '../../css/stylesheet.scss';
import '../../css/wishlist.scss';
import ListContainer from './ListContainer';

const WishList = ({ cart, wishList, width, removeFromCart, addToList, addToCartButton, removeOne, removeFromList }) => {

  return (
    <div className="wishlist-container">
      {
        wishList.length === 0 ?
          <div className="empty-list">
            <h2>Your Wish List is empty</h2>
            <p>Don't miss out on great deals! Start shopping or log in to view products added.</p>
          </div>
        :
        <ListContainer
          removeFromList={removeFromList}
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

export default WishList;
