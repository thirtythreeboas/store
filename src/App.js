import React, { useState, useEffect, useRef } from 'react';
import './css/stylesheet.scss'
import './App.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faUserPlus, faQuestionCircle, faShoppingCart, faCloudShowersHeavy, faBookOpen, faEllipsisV, faSignInAlt, faHeart } from '@fortawesome/free-solid-svg-icons';
import { getFooterData } from './data/data';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import NavBarComponent from './components/navigationComp/Navbar';
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

  const scrollToFooter = useRef();
  const scrollToFooterItem = useRef();

  const [width, setWidth] = useState(0);
  const [displayFooterMenu, setDisplayFooterMenu] = useState(false);
  const [idValue, setIdValue] = useState('');

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

  /// FOOTER

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
    scrollToFooter.current.scrollIntoView({block: 'center', behavior: 'smooth'});
    let footer = document.getElementById('highlightFooter');
    footer.classList.add('footer-highlight');
    setTimeout(() => {
      footer.classList.remove('footer-highlight');
    }, 2000);
  }

  // const openFooterLink = (idValue) => {
  //   scrollToFooterItem.current.scrollTo({block: 'center', behavior: 'smooth'});
  //   let elem = document.getElementById(id);
  //   elem.classList.add('highlight-section');
  //   setTimeout(() => {
  //     elem.classList.remove('highlight-section');
  //   }, 2000);
  // }

  const getId = e => {
    let id = e.target.id;
    let weird = '';
    let idToscrollTo = footerData.map(item => (
      Object.values(item.sections).filter(i => (
        i.replace(/\s+/g, '-').toLowerCase() === id ? () => setIdValue(id) : false))
    ));
    // openFooterLink(weird);
    // for (let i = 0; i < footerData.length; i++) {
    //   for (let p = 0; p < footerData.length; p++) {
    //     if (Object.values(footerData[i].sections)[p].replace(/\s+/g, '-').toLowerCase() === id) weird = id;
    //   }
    // }
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
            <Route path="/" element={<Container/>}/>
            <Route path="/phones/:nameId" element={<Phone width={width} />} />
            <Route path="/books/:nameId" element={<Book width={width} />} />
            <Route path="/devices/:nameId" element={<Device width={width} />} />
            <Route path="/:pathName" element={<ProductList />} />
            <Route path="/support" element={<FooterSupport sectionScroll={scrollToFooterItem} idValue={idValue} />} />
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
          closeFooter={closeFooter}
          footerRef={scrollToFooter}
          footerMenu={footerMenu}
          getId={getId}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
