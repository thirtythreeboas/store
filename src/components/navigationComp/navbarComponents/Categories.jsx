import React from 'react';
import '../../../css/stylesheet.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getMenu } from '../../../data/data';

const Categories = ({
    categoryCss,
    displayMenu,
    openHiddenMenu
  }) => {

  const menu = getMenu();

  return (
    <div style={categoryCss} id="categories">
      <div className="header-categories">
        <h3>Goods</h3>
        <span
          className="close-navbar"
          onClick={displayMenu}
        >
          &times;
        </span>
      </div>
      <div id="cat-menu-container">
        <ul id="category-menu">
          {
            menu.map((item, i) => (
              <li
                key={i + item.name}
                className="category-item"
                onClick={displayMenu}
              >
                <Link className={item.className} to={item.path}>{item.name}</Link>
              </li>
            ))
          }
        </ul>
        <button id="collapse-menu" onClick={openHiddenMenu}>
          <span><FontAwesomeIcon icon="ellipsis-v"/></span>
          <ul id="open-menu" style={{display: 'none'}}>
          </ul>
        </button>
      </div>
    </div>
  )
}

export default Categories;
