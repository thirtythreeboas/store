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
    if (categoryArray.length === 0 || categoryArray.length !== 10) return false;
    let itemsToNumbers = categoryArray.map(x => x.clientWidth);
    let sum = itemsToNumbers.reduce((a, b) =>  a + b);
    setSum(sum);
  }, [categoryArray, width]);



  useEffect(() => {
    if (categoryArray.length === 0 || sum === 0 || width < 768) return;
    let num = document.getElementById('cat-menu-container').clientWidth;
    let deleteNumWidth = num / 7;
    let pushNumWidth = num / 4;

    const handleDelete = () => {
      let sumSubtraction = sum;
      let catArr = categoryArray;
      let delCat = [];
      while (width < sumSubtraction + 50) {
        const collapseMenu = document.getElementById('open-menu');
        let element = categoryArray[categoryArray.length - 1];
        let clientWidth = element.clientWidth;
        if (clientWidth === 0) return;
        let delCat = deletedCategories.concat(clientWidth);
        sumSubtraction = sumSubtraction - clientWidth;
        element.remove();
        collapseMenu.append(element);
        categoryArray.splice(-1, 1);
        if (width >= sumSubtraction) {
          document.getElementById('collapse-menu').style.display = 'flex';
          setSum(sum => sumSubtraction);
          setDeletedCategories(deletedCategories => delCat);
          setCategoryArray(categoryArray => catArr);
          break;
        }
      }
    };

    const handlePush = () => {
      let sumSubtraction = sum;
      let catArr = [];
      const openMenu = document.getElementById("open-menu").getElementsByTagName("li");
      let arr = [...openMenu];
      if (sumSubtraction === 0) {
        return false;
      }
      while (width > sumSubtraction + deleteNumWidth) {
        if (arr.length === 0) return false;
        let categoryMenu = document.getElementById('category-menu');
        let element = arr[arr.length - 1];
        catArr = categoryArray.concat(element);
        element.remove();
        categoryMenu.append(element);
        element.style.display = 'flex';
        let clientWidth = deletedCategories[deletedCategories.length - 1];
        let subtractSum = sumSubtraction + clientWidth;
        deletedCategories.splice(-1, 1);
        if (width >= sumSubtraction + deleteNumWidth) {
          setDeletedCategories(deletedCategories => deletedCategories);
          setCategoryArray(categoryArray => catArr);
          setSum(sum => subtractSum);
          if (deletedCategories.length === 0) {
            document.getElementById('collapse-menu').style.display = 'none';
          }
          break;
        }
      }
    }

    let menu = document.getElementById('cat-menu-container');

    if (width >= 768) {
      let removeElement = width < sum + deleteNumWidth ? handleDelete() : false;
    };
    let addElement = width >= sum + pushNumWidth ? handlePush() : false;
  }, [width, sum])

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const openHiddenMenu = () => {
    let css = document.getElementById('open-menu');
    let displayProp = css.style.display === 'none' ? 'flex' : 'none';
    css.style.display = displayProp;
  }

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
          <div id="cat-menu-container">
            <ul id="category-menu">
              {menu.map((item, i) => (
                <Category
                key={i}
                name={item}
                />
              ))}
            </ul>
            <button id="collapse-menu" onClick={openHiddenMenu}>
              <span><FontAwesomeIcon icon="ellipsis-v"/></span>
              <ul id="open-menu">
              </ul>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBarComponent;
