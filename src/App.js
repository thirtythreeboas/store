import React, { useState, useEffect } from 'react';
import './css/stylesheet.scss'
import './App.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faUserPlus, faQuestionCircle, faShoppingCart, faCloudShowersHeavy, faBookOpen, faEllipsisV, faSignInAlt, faHeart } from '@fortawesome/free-solid-svg-icons';
import { getFooterData } from './data/data';
import { getData } from './data/data';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import NavBarComponent from './components/navigationComp/Navbar';
import Cart from './components/cart/cart';
import Container from './components/mainContent/content/Container';
import Footer from './components/footerComp/Footer';
import FooterSupport from './components/footerComp/FooterSupport';
import Phone from './components/mainContent/goods/Phone';
import Book from './components/mainContent/goods/Book';
import Device from './components/mainContent/goods/Device';
import ProductList from './components/mainContent/content/ProductList';


const App = () => {

  library.add( fab, faUserPlus, faQuestionCircle, faShoppingCart,
  faCloudShowersHeavy, faBookOpen, faEllipsisV, faSignInAlt, faHeart );

  const footerData = getFooterData();
  const data = getData();
  const goods = data.goods;

  const [width, setWidth] = useState(0);
  const [displayFooterMenu, setDisplayFooterMenu] = useState(false);
  const [idValue, setIdValue] = useState('');
  const [cart, setCart] = useState([]);

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

  const addToCartButton = (e, item) => {
    let isInCart;
    let match;
    // let arr = cart;
    if (cart.length !== 0) isInCart = cart.find(elem => elem.name === item.name);
    // if (isInCart === item) return;
    for (const i in goods) {
      match = goods[i].find(elem => elem.name === item.name);
      if (match !== undefined && match.name === item.name) break;
    }
    match.amount += 1;
    match.inCart = true;
    // arr.push(match);
    setCart([...cart, match]);
    // changingCartItemValue()
  }

  const changingCartItemValue = () => {
    console.log(cart);
  }

  const addToList = () => {
    console.log('Adding to List');
  }

  const footerMenu = {
    display: `${width > 767 ? 'flex' : displayFooterMenu === false ? 'none' : 'flex'}`
  }

  return (
    <BrowserRouter>
      <div className="page">
        <ScrollToTop />
        <NavBarComponent
          closeFooter={closeFooter}
          width={width}
        />
        <div className="stack">
          <Routes>
            <Route path="/" element={<Container cart={cart} addToCartButton={addToCartButton} />} />
            <Route path="/cart" element={<Cart cart={cart} width={width} />} />
            <Route path="/phones/:nameId" element={<Phone
              width={width}
              addToCartButton={addToCartButton}
              addToList={addToList} />}
            />
            <Route path="/books/:nameId" element={<Book
              width={width}
              addToCartButton={addToCartButton}
              addToList={addToList} />}
            />
            <Route path="/devices/:nameId" element={<Device
              width={width}
              addToCartButton={addToCartButton}
              addToList={addToList} />}
            />
            <Route path="/:pathName" element={<ProductList
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
