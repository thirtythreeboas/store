import React from 'react';
import '../../css/stylesheet.scss'
import Footer from './Footer';

const FooterContainer = ({
  footerMenu,
  footerHeader,
  closeFooter,
  footer,
  myRef
}) => {
  return (
    <div
      style={footerMenu}
      ref={myRef}
      className="container footer-container"
      id="highlightFooter"
    >
      <div style={footerHeader} className="footer-header">
        <h3>По вопросам</h3>
        <span className="close" onClick={() => closeFooter()}>&times;</span>
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
  );
}

export default FooterContainer;
