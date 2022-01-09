import React from 'react';
// import '../../css/stylesheet.scss';
import '../../css/wishlist.scss';
import ListItem from './ListItem';


const ListContainer = ({ cart, wishList, width, addToList, removeFromCart, addToCartButton, removeOne, removeFromList }) => {

  return (
    <div className="wishlist-section">
      {
        width < 768 ?
        <h3 className="amount-of-items">
          <span>Qty: {wishList.length}</span>
        </h3>
        :
        null
      }
      <div className="wishlist-items">
        {
          wishList.map(item => (
            <ListItem
              removeFromList={removeFromList}
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
    </div>
  )
}

export default ListContainer;
