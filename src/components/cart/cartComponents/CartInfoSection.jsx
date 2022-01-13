import React from 'react';
import { Link } from 'react-router-dom'
import '../../../css/stylesheet.scss';

const CartInfoSection = ({ cart, item, addToCartButton, removeOne }) => {

 const addOneItem = () => {

   let index = cart.indexOf(item);

   return (
      <div className="addRemoveBtn">
        <button onClick={() => addToCartButton(item)}>+</button>
        {
          index !== -1 && cart[index].amount > 1 ?
            <button onClick={() => removeOne(item)}>-</button>
          :
            null
        }
      </div>
   )
 }

  return (
    <div className="cart-info">
      <div className="cart-image">
        <Link to={`/${item.category}/${item.name.replace(/\//g, '')}`}>
          <img src={item.image} alt={item.name}/>
        </Link>
      </div>
      <div className="cart-specs">
        <h3>{item.price}</h3>
        <h2><Link to={`/${item.category}/${item.name.replace(/\//g, '')}`}>{item.name}</Link></h2>
        <div>
          <p>Amount: {item.amount}</p>
          {addOneItem()}
        </div>
      </div>
    </div>
  );
}

export default CartInfoSection;
