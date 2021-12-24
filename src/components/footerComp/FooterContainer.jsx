import React from 'react';
import FooterLowScreenSize from './FooterLowScreenSize';
import '../../css/stylesheet.scss'

export const footer = [
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

const FooterContainer = ({ footerMenu, closeFooter, myRef }) => {

  return (
    <FooterLowScreenSize
      footerMenu={footerMenu}
      closeFooter={closeFooter}
      myRef={myRef}
     />
  );
}

export default FooterContainer;
