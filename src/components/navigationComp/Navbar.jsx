import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../css/stylesheet.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HomePage from './navbarComponents/HomePage';
import NavElements from './navbarComponents/NavElements';
import SearchField from './navbarComponents/SearchField';
import Categories from './navbarComponents/Categories';
import { getMenu } from '../../data/data';

const NavBarComponent = ({ closeFooter, width, cart, wishList }) => {

  const [deletedCategories, setDeletedCategories] = useState([]);
  const [sum, setSum] = useState(0);
  const [categoryArray, setCategoryArray] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const menu = getMenu();

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
    const defaultShowMenu = width >= 768 ? setShowMenu(false) : null;
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

  const openHiddenMenu = () => {
    let css = document.getElementById('open-menu');
    let displayProp = css.style.display === 'none' ? 'flex' : 'none';
    css.style.display = displayProp;
  }

  const displayMenu = () => {
    let stack = document.querySelector('.stack');
    if (width >= 768) return;
    stack.style.display = `${showMenu === false ? 'none' : 'flex'}`;
    setShowMenu(!showMenu);
  }

  const categoryCss = {
    transition: 'transform 0.3s ease-out',
    display: `${showMenu === false && width < 768 ? 'none': 'flex'}`
  }

  const listMenuCss = {
    display: `${width > 767 ? 'none' : 'flex'}`,
  }

  const cartItems = () => {
    const reduceAmount = (a, b) => a + b.amount;
    const totalQty = cart.reduce(reduceAmount, 0);
    return cart.length !== 0 ? <span className="display-cart-items">{totalQty}</span> : null;
  }

  const listItems = () => {
    return wishList.length !== 0 ? <span className="display-cart-items">{wishList.length}</span> : null;
  }

  return (
    <nav className="nav-container">
      <div className="sections">
        <HomePage />
        <NavElements
          displayMenu={() => displayMenu()}
          closeFooter={() => closeFooter()}
          listItems={() => listItems()}
          cartItems={() => cartItems()}
          listMenuCss={listMenuCss}
        />
        <SearchField />
      </div>
      <Categories
        categoryCss={categoryCss}
        displayMenu={() => displayMenu()}
        menu={menu}
        openHiddenMenu={openHiddenMenu}
      />
    </nav>
  );
};

export default NavBarComponent;
