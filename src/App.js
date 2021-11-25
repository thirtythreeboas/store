import React, { useState, useEffect, useRef } from 'react';
import './css/stylesheet.scss'
import './App.scss';
import data from './data/data';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHome, faUserPlus, faQuestionCircle, faShoppingCart, faCloudShowersHeavy, faBookOpen, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { Switch, Route, Link } from 'react-router-dom';
import NavBarComponent from './components/navigationComp/Navbar';
import Container from './components/mainContent/Container';
import FooterContainer from './components/footerComp/FooterContainer';
import Footer from './components/footerComp/Footer';
import ProductPage from './components/mainContent/goods/ProductPage';

const App = () => {

  library.add( fab, faHome, faUserPlus, faQuestionCircle, faShoppingCart, faCloudShowersHeavy, faBookOpen, faEllipsisV );

  const scrollDown = useRef();

  const [state, setState] = useState(data);
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

  const containerDisplay = width >= 768 ? document.querySelector('.main-container').style.display = 'flex' : false;

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


  const { cardAd, footer, phones, books, devices } = state;

  const footerMenu = {
    display: `${width > 767 ? 'flex' : displayFooterMenu === false ? 'none' : 'flex'}`
  }

  const footerHeader = {
    display: `${width > 767 ? 'none' : 'flex'}`
  }

  return (
      <div className="page">
        <NavBarComponent
          handleFooter={closeFooter}
        />
        <Container
          data={data}
          windowWidth={width}
        >
        </Container>
        <FooterContainer
          footer={footer}
          footerMenu={footerMenu}
          footerHeader={footerHeader}
          myRef={scrollDown}
          closeFooter={closeFooter}
        />
      </div>
  );
}

export default App;
