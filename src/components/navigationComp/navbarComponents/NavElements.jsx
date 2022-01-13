import React from 'react';
import { Link } from 'react-router-dom';
import '../../../css/stylesheet.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavElements = ({
    displayMenu,
    closeFooter,
    listItems,
    cartItems,
    listMenuCss
}) => {

  return (
    <div className="nav-elements">
      <ul className="nav-list">

        <li className="list">
          <a className="nav-link" href="#">
            <span><FontAwesomeIcon icon="sign-in-alt" /></span>
            <span>Sign in</span>
          </a>
        </li>

        <li className="list">
          <a className="nav-link" href="#">
            <span><FontAwesomeIcon icon="user-plus" /></span>
            <span>Sign up</span>
          </a>
        </li>

        <li
          className="list"
          style={listMenuCss}
          onClick={() => displayMenu()}
        >
          <a className="nav-link" href="#">
            <span><FontAwesomeIcon
              icon="book-open"
            />
            </span>
            <span>Menu</span>
          </a>
        </li>

        <li
          className="list"
          onClick={() => closeFooter()}
        >
          <a className="nav-link">
            <span><FontAwesomeIcon icon="question-circle" /></span>
            <span>Support</span>
          </a>
        </li>

        <li className="list">
          <Link to="/wishlist" className="nav-link" href="#">
            <span><FontAwesomeIcon icon="heart" />{listItems()}</span>
            <span>List</span>
          </Link>
        </li>

        <li className="list">
          <Link to="/cart" className="nav-link" href="#">
            <span><FontAwesomeIcon icon="shopping-cart" />{cartItems()}</span>
            <span>Cart</span>
          </Link>
        </li>

      </ul>
    </div>
  )
}

export default NavElements;


// import React from 'react';
// import '../../../css/stylesheet.scss';
//
// const NavBarElements = ({}) => {
//
//   return (
//
//   )
// }
//
// export default NavBarElements;
