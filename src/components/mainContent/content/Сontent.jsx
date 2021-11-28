import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../../../css/stylesheet.scss';

const Product = ({items}) => {
  return (
      <div className="making-margin-right">
        <div className="product-card">
            <div className="image">
              <img src={items.image} alt=""/>
            </div>
            <div className="info">
              <p>{items.price}</p>
              <span title={items.name}>{items.name}</span>
              <button>В корзину</button>
            </div>
        </div>
      </div>
  )
};

const Content = ({data, windowWidth}) => {

  const [sliceArray, setSliceArray] = useState(6);

  const booksList = data.books.slice(0, sliceArray);
  const deviceList = data.devices.slice(0, sliceArray);

  // let lel = data.phones.map((item, i) => (console.log(item.name)))


  // const mouse = data.devices.filter(elem => (elem.category === 'mouse'));

  return (
    <div className="goods-container">
      <Outlet/>
      <div className="phone-section">

        <div className="section-header">
          <h2>Телефоны</h2>
        </div>
        <div className="goods">

          <div className="iphone-info-card">
            <a href="">
              <img src="https://i.citrus.ua/imgcache/size_800/uploads/shop/7/5/75cf577bd735788ace8078f7ec4d568d.jpg" alt=""/>
            <p>
              A14 Bionic, самый быстрый процессор iPhone. Дисплей OLED от края до края. Передняя панель Ceramic Shield, которая в четыре раза снижает риск повреждений дисплея при падении. И Ночной режим на всех камерах. Всё это есть в iPhone 12. В двух размерах.
            </p>
            </a>
          </div>
          <div className="products">
                {
                  data.phones.map((item, i) => (
                    <Link
                      style={{textDecoration: 'none'}}
                      to={`/${item.key}`}
                      key={item.key + item.name}
                    >
                      <Product
                        items={item}
                      />
                    </Link>
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
              // mouse.map((item, i) => (
              //   <Product items={item}
              //     key={item + i}
              //   />
              // ))
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


// <h4>iPhone 12 <span>Во-первых, это быстро.</span></h4>
// <h2>
//   Во-первых,
//   это быстро.
// </h2>
