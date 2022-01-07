import React from 'react';
import '../../../css/stylesheet.scss';
import { Link } from 'react-router-dom';

export default function Card ({ item, path, addToCartButton, cart }) {

  let foundItem = cart;
  let lelo;
  let incl;
  if (cart.length !== 0) {
    let value = cart.find(i => i === item ? lelo = i : null);
    let assignment = lelo !== undefined ?
    foundItem = lelo :
    incl = cart.includes(item);
  }

  return (
      <div className="making-margin-right">
        <div className="product-card">
            <Link
              // here we remove forward slashes in item.name to avoid some routing issues
              to={`/${path}/${item.name.replace(/\//g, '')}`}
              style={{textDecoration: 'none'}}
            >
              <div className="image">
                <img src={item.image} alt={item.name}/>
              </div>
              <div className="info">
                <p>{item.price}</p>
                <span title={item.name}>{item.name}</span>
              </div>
            </Link>
            {
              foundItem.length === 0 || incl === false ?
              <button
                className="to-cart"
                onClick={e => addToCartButton(e, item)}
              >
              Add to Card
              </button>
              :
              <button
                className="in-cart"
                onClick={e => addToCartButton(e, item)}
              >
              In Cart
              </button>
            }
        </div>
      </div>
  )
};

// {
//   foundItem.inCart !== undefined && foundItem.inCart === false ?
//   <button
//     className="to-cart"
//     onClick={e => addToCartButton(e, item)}
//   >
//   Add to Card
//   </button>
//   :
//   <button
//     className="in-cart"
//     onClick={e => addToCartButton(e, item)}
//   >
//   In Cart
//   </button>
// }
