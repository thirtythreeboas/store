import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../css/stylesheet.scss';

const Product = ( { item, path } ) => {

  return (
      <div className="making-margin-right">
        <div className="product-card">
            <Link
              // here we remove forward slashes in items.name to avoid some routing issues
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
            <button className="to-cart">В корзину</button>
        </div>
      </div>
  )
};

const Content = ({data, windowWidth}) => {

  const [sliceArray, setSliceArray] = useState(6);
  const [slicePhones, setSlicePhones] = useState(8);

  const booksList = data.books.slice(0, sliceArray);
  const deviceList = data.devices.slice(0, sliceArray);
  const phonesList = data.phones.slice(0, slicePhones);

  return (
    <div className="goods-container">

      <div className="phone-section">

        <div className="section-header">
          <h2>Телефоны</h2>
        </div>

        <div className="goods">

          <div className="iphone-ad">
            <Link
              style={{textDecoration: 'none'}}
              to={`/phones/${data.phones[8].name.replace(/\//g, '')}`}
            >
              <div>
                <img src="https://i.citrus.ua/imgcache/size_800/uploads/shop/7/5/75cf577bd735788ace8078f7ec4d568d.jpg" alt=""/>
                <p>
                  A superpowerful chip. 5G speed. An advanced dual‑camera system. A Ceramic Shield front that's tougher than any smartphone glass. And a bright, beautiful OLED display. iPhone 12 has it all — in two great sizes.
                </p>
              </div>
            </Link>
          </div>

          <div className="products">
            {
              phonesList.map((item, i) => (
                <Product
                  key={item.key + item.name}
                  item={item}
                  path="phones"
                />
              ))
            }
          </div>

        </div>

      </div>

      <div className="book-section">

        <div className="section-header">
          <h2>Книги</h2>
        </div>
        <div className="goods">
          <div className="products">
            {
              booksList.map((item, i) => (
                <Product
                  key={item.key + item.name}
                  item={item}
                  path="books"
                />
              ))
            }
          </div>
        </div>

      </div>

      <div className="device-section">

        <div className="section-header">
          <h2>Компьютерные девайсы</h2>
        </div>
        <div className="goods">
          <div className="products">
            {
              deviceList.map((item, i) => (
                <Product
                  key={item.key + item.name}
                  item={item}
                  path="devices"
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
