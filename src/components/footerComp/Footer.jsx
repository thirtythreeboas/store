import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/stylesheet.scss'
import { getFooterData } from '../../data/data';

const footer = getFooterData();

const Footer = ({ width, footerMenu, closeFooter, footerRef }) => {

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
      {
        footer.map((list, i) => (
          <div key={list.sections.header + i} className="footer">
            <h4>{list.header}</h4>
            <Link to={list.path}>{item}</Link>
          </div>
        ))
      }
    </div>
  );
}

export default Footer;
