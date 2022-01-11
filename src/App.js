import React, { useState, useEffect } from 'react';
import './css/stylesheet.scss'
import './App.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faUserPlus, faQuestionCircle, faShoppingCart, faCloudShowersHeavy, faBookOpen, faEllipsisV, faSignInAlt, faHeart } from '@fortawesome/free-solid-svg-icons';
import { getFooterData } from './data/data';
import { getGoods } from './data/data';
import { HashRouter } from "react-router-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import NavBarComponent from './components/navigationComp/Navbar';
import Cart from './components/cart/Cart';
import WishList from './components/wishList/WishList';
import Container from './components/mainContent/content/Container';
import Footer from './components/footerComp/Footer';
import FooterSupport from './components/footerComp/FooterSupport';
import ProductPage from './components/mainContent/goods/ProductPage';
import ProductList from './components/mainContent/content/ProductList';


const App = () => {

  library.add( fab, faUserPlus, faQuestionCircle, faShoppingCart,
  faCloudShowersHeavy, faBookOpen, faEllipsisV, faSignInAlt, faHeart );

  const footerData = getFooterData();
  const goods = getGoods();
  const generateKey = param => {
    return `${ param }_${ new Date().getTime() }`;
  }

  const [width, setWidth] = useState(0);
  const [displayFooterMenu, setDisplayFooterMenu] = useState(false);
  const [idValue, setIdValue] = useState('');
  const [cart, setCart] = useState([]);
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (width >= 768) setDisplayFooterMenu(false);
  }, [width])

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWidth(width);
  };

  const closeFooter = () => {
    if (width < 768) {
      setDisplayFooterMenu(displayFooterMenu => !displayFooterMenu);
      let prop = document.querySelector('.stack');
      prop.style.display = displayFooterMenu === false ? 'none' : 'flex';
    }
    if (width > 767)
    handleFooterScroll();
  }

  const handleFooterScroll = () => {
    let footer = document.getElementById('highlightFooter');
    footer.scrollIntoView({block: 'center', behavior: 'smooth'});
    footer.classList.add('footer-highlight');
    setTimeout(() => {
      footer.classList.remove('footer-highlight');
    }, 2000);
  }

  const handleFooterBooleanValueChange = () => {
    setDisplayFooterMenu(false);
    let prop = document.querySelector('.stack');
    prop.style.display = 'flex';
  }

  const getId = e => {
    let id = e.target.id;
    footerData.map(item => (
      Object.values(item.sections).filter(i => (
        i.name.replace(/\s+/g, '-').toLowerCase() === id ? setIdValue(id) : null))
    ));
  }

  const changeIdValue = () => {
    setIdValue('');
  }

  const addToCartButton = item => {
    let arr = cart;
    let elem = item;
    let isInCart = cart.find(elem => elem.name === item.name);
    if (arr.includes(isInCart)) {
      arr = arr.map(elem => {
        if (elem.name !== item.name) return elem;
        return {...elem, amount: elem.amount + 1};
      })
    } else {
      elem.amount = 0;
      elem.amount += 1;
      elem.inCart = true;
      arr.unshift(elem);
    }
    setCart([...arr]);
  }

  const removeFromCart = item => {
    setCart(cart.filter(i => i.name !== item.name));
  }

  const removeOneItemFromCart = item => {
    let arr = cart;
    let index = arr.indexOf(item);
    arr[index].amount -= 1;
    setCart([...arr]);
  }

  const addToList = item => {
    let arr = wishList;
    let elem = item;
    let isInList = wishList.find(elem => elem.name === item.name);
    if (arr.includes(isInList)) return;
    arr.unshift(elem);
    setWishList([...arr])
  }

  const removeFromList = item => {
    let arr = wishList;
    let index = arr.indexOf(item);
    arr.splice([index], 1);
    setWishList([...arr]);
  }

  const footerMenu = {
    display: `${width > 767 ? 'flex' : displayFooterMenu === false ? 'none' : 'flex'}`
  }

  const kek = <p>kek</p>

  return (
    <BrowserRouter>
      <div className="page">
        <ScrollToTop />
        <NavBarComponent
          closeFooter={closeFooter}
          width={width}
          cart={cart}
          wishList={wishList}
        />
        <div className="stack">
          <Routes>
            <Route path="/" element={<Container
              cart={cart}
              wishList={wishList}
              addToCartButton={addToCartButton} />}
            />
            <Route path="/cart" element={<Cart
              width={width}
              cart={cart}
              wishList={wishList}
              addToCartButton={addToCartButton}
              wishList={wishList}
              addToList={addToList}
              removeFromCart={removeFromCart}
              removeOne={removeOneItemFromCart} />}
            />
            <Route path="/wishList" element={<WishList
              width={width}
              cart={cart}
              addToCartButton={addToCartButton}
              wishList={wishList}
              addToList={addToList}
              removeFromList={removeFromList}
              removeFromCart={removeFromCart}
              removeOne={removeOneItemFromCart} />}
            />
            {
              Object.entries(goods).map(([key]) => (
                  <Route
                    key={generateKey + key}
                    path={`/${key}/:nameId`}
                    element={<ProductPage
                      width={width}
                      cart={cart}
                      wishList={wishList}
                      addToCartButton={addToCartButton}
                      addToList={addToList}
                    />}
                  />
                )
              )
            }
            <Route path="/:pathName" element={<ProductList
              cart={cart}
              wishList={wishList}
              addToCartButton={addToCartButton}
              addToList={addToList} />}
            />
            <Route path="/support" element={<FooterSupport
              idValue={idValue}
              changeIdValue={changeIdValue} />}
            />
            <Route
              path="*"
              element={
                <main style={{ padding: '1rem' }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Routes>
        </div>
        <Footer
          width={width}
          boolChange={handleFooterBooleanValueChange}
          closeFooter={closeFooter}
          footerMenu={footerMenu}
          getId={getId}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
