import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/stylesheet.scss'
import { getFooterData } from '../../data/data';

const footer = getFooterData();

const Footer = ({ width, footerMenu, closeFooter, footerRef, getId }) => {

  const footerHeader = {
    display: `${width > 767 ? 'none' : 'flex'}`
  }

  return (
    <div
      style={footerMenu}
      ref={footerRef}
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
            <div key={i + i} className="footer-item">
              <h4>{item.header}</h4>
              {
                Object.values(item.sections).map((elem, i) => (
                  <span
                    key={i + elem}
                  >
                    <Link
                      to="/support"
                      id={elem.replace(/\s+/g, '-').toLowerCase()}
                      onClick={e => getId(e)}
                    >
                      {elem}
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
