import React, { useState, useEffect, useRef } from 'react';
import Category from './Category';
import '../../css/stylesheet.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBarComponent = (props) => {
  const [deletedCategories, setDeletedCategories] = useState([]);
  const [width, setWidth] = useState(0);
  const [sum, setSum] = useState(0);
  const [categoryArray, setCategoryArray] = useState([]);
  const [categories, setCategories] = useState({
    menu: [
      'Книги',
      'Спорт',
      'Электроника',
      'Обувь и одежда',
      'Игры',
      'Товары для дома',
      'Бытовая техника',
      'Детские товары',
      'Музыка',
      'Туризм'
    ]
  })
  const [showMenu, setShowMenu] = useState(false);


  useEffect(() => {
    const obj = document.getElementsByClassName('category-item');
    let arr = Array.prototype.slice.call(obj);
    setCategoryArray(categoryArray => arr);
  }, []);

  useEffect(() => {
    if (categoryArray.length === 0 && categoryArray.length !== 10) return false;
    let itemsToNumbers = categoryArray.map(x => x.clientWidth);
    let sum = itemsToNumbers.reduce((a, b) =>  a + b);
    setSum(sum);
  }, [categoryArray]);


  useEffect(() => {
    if (categoryArray.length === 0 || sum === 0 || width < 768) return;

    const handleDelete = () => {
      console.log('here');
      let sumSubtraction = sum;
      let catArr = categoryArray;
      let delCat = [];
      while (width < sumSubtraction + 50) {
        const collapseMenu = document.getElementById('open-menu');
        let element = categoryArray[categoryArray.length - 1];
        let clientWidth = element.clientWidth;
        sumSubtraction = sumSubtraction - clientWidth;
        element.remove();
        collapseMenu.append(element)
        categoryArray.splice(-1, 1);
        if (width >= sumSubtraction) {
          document.getElementById('collapse-menu').style.display = 'flex';
          setSum(sum => sumSubtraction);
          setCategoryArray(categoryArray => catArr);
          break;
        }
      }
    };

    const handlePush = () => {
      const openMenu = document.getElementById("open-menu").getElementsByTagName("li");
      // const menuElem = openMenu.getElementsByTagName("li");
      // let arr = [...menuElem];
      let arr = [...openMenu];
      if (sum === 0) return false;
      const catArr = categoryArray.concat(arr[arr.length - 1]);
      console.log(catArr);
      setCategoryArray(catArr);
      let element = categoryArray[categoryArray.length - 1];
      let categoryMenu = document.getElementById('category-menu');
      element.remove();
      categoryMenu.append(element);
      let subtractSum = sum + element.width;
      setSum(subtractSum);
      if (deletedCategories.length === 0) document.getElementById('collapse-menu').style.display = 'none';
    }

    if (width >= 768) {
      // НЕ ЭЛЕГАНТНО НЕ РЕЛЕВАНТНО (width < sum + 50!!!)
      let deleteLastElement = width < sum + 50 ? handleDelete() : false;
    };

    // let loleska = categoryArray[categoryArray.length - 1].clientWidth;

    let addDeletedElements = width >= (sum + 50) ? handlePush() : false;

    // if (deletedCategories.length != 0) {
    //   let addDeletedElements = width >= (sum + deletedCategories[deletedCategories.length - 1].width + 50) ? handlePush() : false;
    // };
  }, [width, sum])

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const updateDimensions = () => {
      const width = window.innerWidth;
      setWidth(width);
  };

  const displayMenu = () => {
    if (width > 767)
    document.querySelector('.footer-container').style.display = `${showMenu === false ? 'none' : 'flex'}`;

    document.querySelector('.main-container').style.display = `${showMenu === false ? 'none' : 'flex'}`;
    setShowMenu(!showMenu);
  }

  const { menu } = categories;

  const css = {
    transition: 'transform 0.3s ease-out',
    display: `${showMenu === false && 767 >= width ? 'none': 'flex'}`,
  }

  const listMenuCss = {
    display: `${width >= 767 ? 'none' : 'flex'}`,
  }

  return (
    <>
      <nav className="nav-container">
        <div className="sub-nav-container">
          <div className="sections">

            <div className="logo">
                <a href="">
                  <span><FontAwesomeIcon icon="cloud-showers-heavy" /></span>
                  <span>rain</span>Store
                </a>
            </div>

            <div className="nav-elements">
              <ul className="nav-list">

                <li className="list">
                  <a className="nav-link" href="#">
                    <span><FontAwesomeIcon icon="home" /></span>
                    <span>Войти</span>
                  </a>
                </li>

                <li className="list">
                  <a className="nav-link" href="#">
                    <span><FontAwesomeIcon icon="user-plus" /></span>
                    <span>Зарегистрироваться</span>
                  </a>
                </li>

                <li
                  className="list"
                  style={listMenuCss}
                  onClick={displayMenu}
                >
                  <a className="nav-link" href="#">
                    <span><FontAwesomeIcon
                      icon="book-open"
                    />
                    </span>
                    <span>Меню</span>
                  </a>
                </li>

                <li
                  className="list"
                  onClick={props.handleFooter}
                >
                  <a className="nav-link">
                    <span><FontAwesomeIcon icon="question-circle" /></span>
                    <span>Помощь</span>
                  </a>
                </li>

                <li className="list">
                  <a className="nav-link" href="#">
                    <span><FontAwesomeIcon icon="shopping-cart" /></span>
                    <span>Корзина</span>
                  </a>
                </li>

              </ul>
            </div>

            <div className="search-box">
              <form className="">
                <button className="">
                  Поиск
                </button>
                <input type="text" name="search"/>
              </form>
            </div>

          </div>

        </div>

        <div style={css} className="categories">
          <div className="header-categories">
            <h3>Товары</h3>
            <span className="close" onClick={displayMenu}>&times;</span>
          </div>
          <ul id="category-menu">
            {menu.map((item, i) => (
              <Category
                key={i}
                name={item}
              />
            ))}
            <li id="collapse-menu">
              <span><FontAwesomeIcon icon="ellipsis-v"/></span>
              <ul id="open-menu">
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBarComponent;
