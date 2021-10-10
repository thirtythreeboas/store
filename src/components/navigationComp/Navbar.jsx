import React, { useState, useEffect, useRef } from 'react';
import Category from './Category';
import '../../css/stylesheet.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBarComponent = (props) => {
  const [deletedCategories, setDeletedCategories] = useState([]);
  const [width, setWidth] = useState(0);
  const [categoryArray, setCategoryArray] = useState([]);
  // get rid of the array below
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
    const arr = document.getElementsByClassName('category-item');
    let categoryArray = Array.prototype.slice.call(arr);
    setCategoryArray(categoryArray);
  }, []);

  useEffect(() => {
    if (categoryArray.length === 0) return false;
    const itemsToNumbers = categoryArray.map(x => x.clientWidth);
    const sum = itemsToNumbers.reduce((a, b) =>  a + b);

    const handleDelete = () => {
      categoryArray[categoryArray.length - 1].style.display = 'none';
      let arr = deletedCategories.concat(categoryArray[categoryArray.length - 1])
      setDeletedCategories(arr);
      categoryArray.splice(-1, 1);
    };

    const handlePush = () => {
      console.log('kekemba');
      let arr = categoryArray.concat(deletedCategories[deletedCategories.length - 1]);
      setCategoryArray(arr);
      deletedCategories.splice(-1, 1);
      categoryArray[categoryArray.length - 1].style.display = 'flex';
    }

    let deleteLastElement = width <= sum ? handleDelete() : false;

    if (deletedCategories.length != 0) {
      console.log(deletedCategories[deletedCategories.length - 1].clientWidth);
      // let addDeletedElements =  sum + deletedCategories[deletedCategories.length - 1].clientWidth <= width ? handlePush() : false;
    };
  }, [categoryArray, width])


  // console.log(deletedCategories);

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
          <ul>
            {menu.map((item, i) => (
              <Category
                key={i}
                name={item}
              />
            ))}
            <li><span><FontAwesomeIcon icon="ellipsis-v" /></span></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBarComponent;
