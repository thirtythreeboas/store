import React from 'react';
import { Link } from 'react-router-dom';
import '../../../../css/stylesheet.scss';
import Card from './Card';

const PhoneSection = ({ data, cart, addToCartButton }) => {
  const phonesList = data.goods.phones.slice(0, 8);

  return (
    <div className="phone-section">
      <div className="section-header">
        <h2>Phones</h2>
      </div>
      <div className="goods">
        <div className="iphone-ad">
          <Link
            style={{textDecoration: 'none'}}
            to={`/phones/${data.goods.phones[8].name.replace(/\//g, '')}`}
          >
            <div>
              <img src="https://m.media-amazon.com/images/I/71umuN8XVeL.jpg" alt=""/>
              <p>
                A superpowerful chip. 5G speed. An advanced dual‑camera system. A Ceramic Shield front that's tougher than any smartphone glass. And a bright, beautiful OLED display. iPhone 12 has it all — in two great sizes.
              </p>
            </div>
          </Link>
        </div>
        <div className="products">
          {
            phonesList.map(item => (
              <Card
                key={item.key + item.name}
                cart={cart}
                item={item}
                path="phones"
                addToCartButton={addToCartButton}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default PhoneSection;
