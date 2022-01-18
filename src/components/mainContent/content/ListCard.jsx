import React from 'react';
import '../../../css/listcard.scss';
import CardInfo from './listCardComponents/CardInfo';
import CardLogic from './listCardComponents/CardLogic';

const ListCard = ({
    item,
    path,
    addToCartButton,
    addToList,
    wishList,
    cart
  }) => {

  return (
    <div className="list-card">
      <CardInfo
        item={item}
        path={path}
      />
      <CardLogic
        cart={cart}
        item={item}
        wishList={wishList}
        addToCartButton={addToCartButton}
        addToList={addToList}
      />
    </div>
  );
}

export default ListCard;
