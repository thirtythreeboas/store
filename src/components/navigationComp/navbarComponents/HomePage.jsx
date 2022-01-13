import React from 'react';
import '../../../css/stylesheet.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HomePage = () => {

  const linkCss = {
    display: 'flex',
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 300,
    margin: 0
  }

  return (
    <Link style={linkCss} to="/">
      <div className="logo">
        <span><FontAwesomeIcon icon="cloud-showers-heavy" /></span>
        <span>rain</span>Store
      </div>
    </Link>
  )
}

export default HomePage;
