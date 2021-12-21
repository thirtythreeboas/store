import React from 'react';
import '../../css/stylesheet.scss'

const footer = [
  {
    header: 'About Us',
    sectionOne: 'Contact Us',
    sectionTwo: 'Brand',
    sectionThree: 'Amazon Business Card',
    sectionFour: 'Job'
  },
  {
    header: 'Services',
    sectionOne: 'Shop with Points',
    sectionTwo: 'Sell products on Amazon',
    sectionThree: 'Become an Affiliate',
    sectionFour: 'Advertise Your Products'
  },
  {
    header: 'Networks',
    sectionOne: 'Vk',
    sectionTwo: 'Telegram',
    sectionThree: 'Instagram',
    sectionFour: 'Twitter'
  },
  {
    header: 'Help',
    sectionOne: 'Shop with Points',
    sectionTwo: 'Delivery',
    sectionThree: 'Amazon Business Card',
    sectionFour: 'Security'
  }
];

const Footer = ({footerList, header}) => {

  return (
      <ul className="footer">
        {
          Object.values(footerList).map((section, i) => (
            <li key={i}><a href="">{section}</a></li>
          ))
        }
      </ul>
  )
}

const FooterContainer = ({ footerMenu, footerHeader, closeFooter, myRef }) => {

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
          <Footer
            key={i}
            header={list.header}
            footerList={list}
          />
        ))
      }
    </div>
  );
}

export default FooterContainer;
