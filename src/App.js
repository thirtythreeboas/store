import React, { useState, useEffect, useRef } from 'react';
import './css/stylesheet.scss'
import './App.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faUserPlus, faQuestionCircle, faShoppingCart, faCloudShowersHeavy, faBookOpen, faEllipsisV, faSignInAlt, faHeart } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import NavBarComponent from './components/navigationComp/Navbar';
import Container from './components/mainContent/content/Container';
import FooterContainer from './components/footerComp/FooterContainer';
import Phone from './components/mainContent/goods/Phone';
import Book from './components/mainContent/goods/Book';
import Device from './components/mainContent/goods/Device';
import ProductList from './components/mainContent/content/ProductList';
// import FooterLowScreenSize from './components/footerComp/FooterLowScreenSize';


const App = () => {

  library.add( fab, faUserPlus, faQuestionCircle, faShoppingCart, faCloudShowersHeavy, faBookOpen, faEllipsisV, faSignInAlt, faHeart );

  const scrollDown = useRef();

  const [width, setWidth] = useState(0);
  const [displayFooterMenu, setDisplayFooterMenu] = useState(false);

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
      let prop = document.querySelector('.main-container');
      prop.style.display = displayFooterMenu === false ? 'none' : 'flex';
    }
    if (width > 767)
    handleDisplayFooter();
  }

  const handleDisplayFooter = () => {
    scrollDown.current.scrollIntoView({block: "center", behavior: "smooth"});
    let footer = document.getElementById('highlightFooter');
    footer.classList.add('footer-highlight');
    setTimeout(() => {
      footer.classList.remove('footer-highlight');
    }, 2000);
  }

  const footerMenu = {
    display: `${width > 767 ? 'flex' : displayFooterMenu === false ? 'none' : 'flex'}`
  }

  const footerHeader = {
    display: `${width > 767 ? 'none' : 'flex'}`
  }

  return (
    <BrowserRouter>
      <div className="page">
        <ScrollToTop />
        <NavBarComponent
          handleFooter={closeFooter}
        />
        <Routes>
          <Route path="/" element={<Container/>}/>
          <Route path="/phones/:nameId" element={<Phone width={width} />} />
          <Route path="/books/:nameId" element={<Book width={width} />} />
          <Route path="/devices/:nameId" element={<Device width={width} />} />
          <Route path="/:pathName" element={<ProductList />} />
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
        <FooterContainer
          footerMenu={footerMenu}
          footerHeader={footerHeader}
          myRef={scrollDown}
          closeFooter={closeFooter}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
