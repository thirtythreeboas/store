import React from 'react';
// import '../../css/stylesheet.scss';
import '../../../css/wishlist.scss';
import ListButton from './ListButton';
import ListInfoSection from './ListInfoSection';

const ListItem = ({ cart, item, addToCartButton, removeFromList }) => {

  return (
    <div className="wishlist-item">
      <ListInfoSection
        item={item}
      />
      <ListButton
        cart={cart}
        item={item}
        removeFromList={removeFromList}
        addToCartButton={addToCartButton}
      />
    </div>
  );
}

export default ListItem;
