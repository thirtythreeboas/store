import React from 'react';
// css/commonProductStyles.scss
import '../../../css/stylesheet.scss';

const Button = ({ width, addToCartButton, addToList, data, cart, wishList }) => {

  const cssCart = {
    backgroundColor: '#3dbe52',
    height: `${width < 768 ? '38px' : 'auto'}`,
    justifyContent: 'center'
  }

  const cssList = {
    backgroundColor: '#ffa200',
    color: '#fff',
    height: `${width < 768 ? '38px' : 'auto'}`
  }

  const addedInCart = (
    <button style={cssCart} className="add-to-cart-button">In Cart</button>
  );

  const addedInList = (
    <button style={cssList} className="add-to-list">In List</button>
  )

  const lowScreenButton = (
    <div className="button-div">
      {
        cart.indexOf(data) === -1 ?
          <button
            className="add-to-cart-button"
            onClick={() => addToCartButton(data)}
          >
            <div className="add">Add to Cart</div>
            <div className="product-price">{data.price}</div>
          </button>
        :
          addedInCart
      }
      {
        wishList.indexOf(data) === -1 ?
          <button
            className="add-to-list"
            onClick={() => addToList(data)}
          >
            Add to List
          </button>
        :
          addedInList
      }
    </div>
  );

  const largeScreenButton = (
    <div className="button-div">
      <p className="item-price">Price: {data.price}</p>
      <p className="item-in-stock">{data.inStock}</p>
      {
        cart.indexOf(data) === -1 ?
          <button
            className="add-to-cart-button"
            onClick={() => addToCartButton(data)}
          >
            Add to Cart
          </button>
        :
          addedInCart
      }
      {
        wishList.indexOf(data) === -1 ?
          <button
            className="add-to-list"
            onClick={() => addToList(data)}
          >
            Add to list
          </button>
        :
          addedInList
      }
    </div>
  );

  return (
    <>
      {width > 767 ? largeScreenButton : lowScreenButton}
    </>
  );
}

export default Button;
