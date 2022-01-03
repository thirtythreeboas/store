import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/stylesheet.scss'
import { getFooterData } from '../../data/data';

const footer = getFooterData();

const Footer = ({ width, footerMenu, closeFooter, getId, setDisplayFooterMenu, boolChange }) => {

  const footerHeader = {
    display: `${width > 767 ? 'none' : 'flex'}`
  }

  return (
    <div
      style={footerMenu}
      className="container footer-container"
      id="highlightFooter"
    >
      <div style={footerHeader} className="footer-header">
        <h3>Support</h3>
        <span className="close" onClick={() => closeFooter()}>&times;</span>
      </div>
      <div className="footer">
        {
          footer.map((item, i) => (
            <div
              key={i + i}
              className="footer-item"
              id={item.id}
            >
              <h4>{item.header}</h4>
              {
                Object.values(item.sections).map((elem, i) => (
                  elem.icon !== undefined ?

                  <a key={i + elem.name} href={elem.link}>
                    <span>
                      <img src={elem.icon} alt={elem.name}/>
                    </span>
                    {elem.name}
                  </a>

                  :

                  <span
                    key={i + elem.name}
                    className="footer-item-span"
                    onClick={() => boolChange()}
                  >
                    <Link
                      to="/support"
                      id={elem.name.replace(/\s+/g, '-').toLowerCase()}
                      onClick={e => getId(e)}
                    >
                      {elem.name}
                    </Link>
                  </span>
                ))
              }
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Footer;
