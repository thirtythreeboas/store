import React from 'react';
import { Link } from 'react-router-dom';
import '../../../css/stylesheet.scss';
import Card from './Card';

const Content = ({ data, windowWidth, addToCartButton, cart }) => {

  const booksList = data.goods.books.slice(0, 6);
  const deviceList = data.goods.devices.slice(0, 6);
  const phonesList = data.goods.phones.slice(0, 8);

  return (
    <div className="goods-container">

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
                <img src="https://m.economictimes.com/thumb/msid-78825344,width-1200,height-900,resizemode-4,imgsize-247196/to-spread-the-festive-season-cheer-the-good-folks-at-apple-have-introduced-attractive-deals-and-offers-for-those-who-wish-to-save-on-their-purchase-of-the-latest-iphone-.jpg" alt=""/>
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

      <div className="book-section">

        <div className="section-header">
          <h2>Books</h2>
        </div>
        <div className="goods">
          <div className="products">
            {
              booksList.map(item => (
                <Card
                  key={item.key + item.name}
                  cart={cart}
                  item={item}
                  path="books"
                  addToCartButton={addToCartButton}
                />
              ))
            }
          </div>
        </div>

      </div>

      <div className="device-section">

        <div className="section-header">
          <h2>Devices</h2>
        </div>
        <div className="goods">
          <div className="products">
            {
              deviceList.map(item => (
                <Card
                  key={item.key}
                  cart={cart}
                  item={item}
                  path="devices"
                  addToCartButton={addToCartButton}
                />
              ))
            }
          </div>
        </div>

      </div>

    </div>
  );
}

export default Content;
