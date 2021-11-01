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

  // console.log(`outer sum: ${sum}`);

  useEffect(() => {
    if (categoryArray.length === 0 || sum === 0 || width < 768) return;
    // console.log(`sum: ${sum}; width: ${width}; length: ${categoryArray.length}`);

    const sumSubtraction = () => {
      let subtractSum = sum - categoryArray[categoryArray.length - 1].clientWidth;
      setSum(subtractSum);
    }

    const handleDelete = () => {
      let sumDel = sum;
      // console.log(`here ${sumDel}`);
      let catArr = categoryArray;
      let delCat = [];
      console.log('Handle Delete');
      while (width < sumDel + 50) {
        let clientWidth = categoryArray[categoryArray.length - 1].clientWidth;
        sumDel = sumDel - clientWidth;
        delCat = deletedCategories.concat(
          {
            element: categoryArray[categoryArray.length - 1],
            width: categoryArray[categoryArray.length - 1].clientWidth
          }
        );
        console.log(`sumDel: ${sumDel}, width: ${width}`);
        categoryArray[categoryArray.length - 1].style.display = 'none';
        categoryArray.splice(-1, 1);
        catArr = categoryArray
        console.log(catArr);
        if (width >= sumDel) {
          console.log('lelo');
          setCategoryArray(catArr);
          setDeletedCategories(deletedCategories => delCat);
          break;
        }
      }
    };

    const handlePush = () => {
      if (sum === 0) return false;
      console.log('Handle Push');
      deletedCategories[deletedCategories.length - 1].element.style.display = "flex";
      let arr = categoryArray.concat(deletedCategories[deletedCategories.length - 1].element);
      let subtractSum = sum + deletedCategories[deletedCategories.length - 1].width;
      setSum(subtractSum);
      setCategoryArray(arr);
      let spliceArr = deletedCategories.splice(-1, 1);
      setDeletedCategories(deletedCategories);
    }

    // НЕ ЭЛЕГАНТНО НЕ РЕЛЕВАНТНО (width < sum + 50!!!)
    if (width >= 768) {
      let deleteLastElement = width < sum + 50 ? handleDelete() : false;
    };

    if (deletedCategories.length != 0) {
      let addDeletedElements = width >= (sum + deletedCategories[deletedCategories.length - 1].width + 50) ? handlePush() : false;
    };
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
