import React, { useState, useEffect, useRef } from 'react';
import './css/stylesheet.scss'
import './App.scss';
import data from './data/data';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHome, faUserPlus, faQuestionCircle, faShoppingCart, faCloudShowersHeavy, faBookOpen } from '@fortawesome/free-solid-svg-icons'
import NavBarComponent from './components/navigationComp/Navbar';
import Container from './components/mainContent/Container';
import Footer from './components/footerComp/Footer';
import ProductPage from './components/mainContent/goods/ProductPage';

const App = () => {

  library.add( fab, faHome, faUserPlus, faQuestionCircle, faShoppingCart, faCloudShowersHeavy, faBookOpen );

  const scrollDown = useRef();

  const [state, setState] = useState(data);
  const [windowWidthValue, setWindowWidthValue] = useState(0);
  const [displayFooterMenu, setDisplayFooterMenu] = useState(false);

  const changeStateDisplay = () => {
    setDisplayFooterMenu(!displayFooterMenu);
  }

  const closeFooter = () => {
    if (windowWidthValue <= 767) {
      changeStateDisplay();
      styleBodyOverflow()
    }
    if (windowWidthValue > 767)
    handleDisplayFooter();
  }

  const styleBodyOverflow = () => {
    document.querySelector('.main-container').style.display = `${displayFooterMenu === false ? 'none' : 'flex'}`;
  }

  const handleDisplayFooter = () => {
    scrollDown.current.scrollIntoView({block: "center", behavior: "smooth"});
    let footer = document.getElementById('highlightFooter');
    footer.classList.add('footer-highlight');
    setTimeout(() => {
      footer.classList.remove('footer-highlight');
    }, 2000);
  }

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const updateDimensions = () => {
      const windowWidthValue = window.innerWidth;
      setWindowWidthValue(windowWidthValue);
  };

  const { cardAd, footer, phones, books, devices } = state;

  const footerMenu = {
    display: `${windowWidthValue > 767 ? 'flex' : displayFooterMenu === false ? 'none' : 'flex'}`
  }
  const footerHeader = {
    display: `${windowWidthValue > 767 ? 'none' : 'flex'}`
  }

  return (
    <div className="page">
      <NavBarComponent
        changeStateDisplay={changeStateDisplay}
        styleBodyOverflow={styleBodyOverflow}
        handleFooter={closeFooter}
      />
      <div className="main-container" style={{marginBottom: '50px'}}>
        <Container
          data={data}
          windowWidth={windowWidthValue}
        />
      </div>
      <div
        style={footerMenu}
        ref={scrollDown}
        id="highlightFooter"
        className="container footer-container"
        // style={{display: 'none'}}
      >
        <div style={footerHeader} className="footer-header">
          <h3>По вопросам</h3>
          <span className="close" onClick={closeFooter}>&times;</span>
        </div>
        {
          footer.map((list, i) => (
            <Footer
              key={i}
              header={list.header}
              footerData={list}
            />
          ))
        }
      </div>

    </div>
  );
}

export default App;
