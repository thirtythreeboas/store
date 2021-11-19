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
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWidth(width);
  };

  useEffect(() => {
    const obj = document.getElementsByClassName('category-item');
    let arr = Array.prototype.slice.call(obj);
    setCategoryArray(categoryArray => arr);
  }, []);

  useEffect(() => {
    if (categoryArray.length === 0 || categoryArray.length !== 10) return false;
    let itemsToNumbers = categoryArray.map(x => x.clientWidth);
    let sum = itemsToNumbers.reduce((a, b) => a + b);
    setSum(sum);

  }, [categoryArray, width]);

  useEffect(() => {
    const defaultShowMenu = width >= 768 ? setShowMenu(false) : undefined;
    if (categoryArray.length === 0 || sum === 0 || showMenu === true) return;

    const handleDelete = () => {
      let sumSubtraction = sum;
      let arrCat = categoryArray;
      let delCat = deletedCategories;
      /// +5??? lol chto?
      while (width < sumSubtraction + 45) {
        const collapseMenu = document.getElementById('open-menu');
        let element = arrCat[arrCat.length - 1];
        let clientWidth = element.clientWidth;
        if (clientWidth === 0) return;
        sumSubtraction = sumSubtraction - clientWidth;
        delCat = delCat.concat(clientWidth);
        element.remove();
        collapseMenu.append(element);
        arrCat.splice(-1, 1);
        if (width >= sumSubtraction) {
          document.getElementById('collapse-menu').style.display = 'flex';
          setSum(sumSubtraction);
          setDeletedCategories(delCat);
          setCategoryArray(arrCat);
          break;
        }
      }
    };

    const handlePush = () => {
      if (sum === 0) return;
      let sumSubtraction = sum;
      let num = deletedCategories;
      let catArr = [];
      const collapseMenu = document.getElementById('collapse-menu');
      /// +5??? lol chto?
      const menuWidth = collapseMenu.clientWidth + 5;
      const openMenu = document.getElementById("open-menu").getElementsByTagName("li");
      let arr = [...openMenu];
      while (width > sumSubtraction + num[num.length - 1] + menuWidth) {
        let categoryMenu = document.getElementById('category-menu');
        let element = arr[arr.length - 1];
        catArr = categoryArray.concat(element);
        element.remove();
        categoryMenu.append(element);
        element.style.display = 'inline';
        let clientWidth = num[num.length - 1];
        sumSubtraction = sumSubtraction + clientWidth;
        num.splice(-1, 1);
        if (width >= sumSubtraction) {
          setDeletedCategories(num);
          setCategoryArray(catArr);
          setSum(sumSubtraction);
          if (deletedCategories.length === 0) {
            document.getElementById('collapse-menu').style.display = 'none';
          }
          break;
        }
      }
    }

    const appendToCatMenu = () => {
      let catArr = categoryArray;
      let elements = document.getElementById('open-menu').getElementsByTagName('li');
      let arr = [...elements].reverse();
      let mainCatMenu = document.getElementById('category-menu');
      let button = document.getElementById('collapse-menu').style.display = 'none';
      mainCatMenu.style.justifyContent = 'çenter';
      for (let i = 0; i < arr.length; i++) {
        catArr = catArr.concat(arr[i])
        arr[i].remove();
        mainCatMenu.append(arr[i]);
      }
      setCategoryArray(catArr);
    }

    const sumRecover = () => {
      const reduceDeletedCats = deletedCategories.reduce((a, b) => a + b);
      let newSum = sum + reduceDeletedCats;
      appendToCatMenu();
      setSum(newSum);
      setDeletedCategories([]);
    };

    const buttonLaunchedMenu = width < 768 && deletedCategories.length !== 0 ? sumRecover() : false;

    if (width >= 768) {
      /// +45??? lol chto?
      const removeElement = width < sum + 45 ? handleDelete() : false;
    }

    if (width >= 768) {
      const addElement = width >= sum && deletedCategories.length !== 0 ? handlePush() : false;
    }


  }, [width, sum])


  const { menu } = categories;

  const openHiddenMenu = () => {
    let css = document.getElementById('open-menu');
    let displayProp = css.style.display === 'none' ? 'flex' : 'none';
    css.style.display = displayProp;
  }


  const displayMenu = () => {
    if (width > 767)
    document.querySelector('.footer-container').style.display = `${showMenu === false ? 'none' : 'flex'}`;

    document.querySelector('.main-container').style.display = `${showMenu === false ? 'none' : 'flex'}`;
    setShowMenu(!showMenu);
  }


  const css = {
    transition: 'transform 0.3s ease-out',
    display: `${showMenu === false && width < 768 ? 'none': 'flex'}`
  }

  const listMenuCss = {
    display: `${width > 767 ? 'none' : 'flex'}`,
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
                  onClick={() => displayMenu()}
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
                  onClick={() => props.handleFooter()}
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

        <div style={css} id="categories">
          <div className="header-categories">
            <h3>Товары</h3>
            <span className="close" onClick={() => displayMenu()}>&times;</span>
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
            <button id="collapse-menu" onClick={() => openHiddenMenu()}>
              <span><FontAwesomeIcon icon="ellipsis-v"/></span>
              <ul id="open-menu" style={{display: 'none'}}>
              </ul>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBarComponent;
