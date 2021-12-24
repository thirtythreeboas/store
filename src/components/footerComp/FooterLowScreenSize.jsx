import React from 'react';
import '../../css/stylesheet.scss';
import { footer } from './FooterContainer';

export default function FooterLowScreenSize({ footerMenu, footerHeader, closeFooter, myRef }) {

  return (
    <div
      style={footerMenu}
      ref={myRef}
      className="container footer-container"
      id="highlightFooter"
    >
      <div style={footerHeader} className="footer-header">
        <h3>Support</h3>
        <span className="close" onClick={() => closeFooter()}>&times;</span>
      </div>
      {
        footer.map((list, i) => (
          <ul key={list.header + i} className="footer">
            {
              Object.values(list).map((item, index) => (
                <li key={index}><a href="">{item}</a></li>
              ))
            }
          </ul>
        ))
      }
    </div>
  );
}
