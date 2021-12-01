import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../css/stylesheet.scss';

const Product = ({items}) => {
  return (
      <div className="making-margin-right">
        <div className="product-card">
            <Link
              // here we remove forward slashes in items.name to avoid some issues related to routing
              to={`/${items.name.replace(/\//g, '')}`}
              style={{textDecoration: 'none'}}
              >
              <div className="image">
                <img src={items.image} alt={items.name}/>
              </div>
              <div className="info">
                <p>{items.price}</p>
                <span title={items.name}>{items.name}</span>
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
              to={`/${data.phones[8].key}`}
            >
              <div>
                <img src="https://i.citrus.ua/imgcache/size_800/uploads/shop/7/5/75cf577bd735788ace8078f7ec4d568d.jpg" alt=""/>
                <p>
                  A14 Bionic, самый быстрый процессор iPhone. Дисплей OLED от края до края. Передняя панель Ceramic Shield, которая в четыре раза снижает риск повреждений дисплея при падении. И Ночной режим на всех камерах. Всё это есть в iPhone 12. В двух размерах.
                </p>
              </div>
            </Link>
          </div>

          <div className="products">
            {
              phonesList.map((item, i) => (
                <Product
                  key={item.key + item.name}
                  items={item}
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
                <Product items={item}
                  key={item.key + item.name}
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
                <Product items={item}
                  key={item.key + item.name}
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
