import React from 'react';
import { Link } from 'react-router-dom'
// import '../../css/stylesheet.scss';
import '../../../css/wishlist.scss';

const ListInfoSection = ({ item }) => {

  return (
    <div className="wishlist-info">
      <div className="wishlist-image">
        <Link to={`/${item.category}/${item.name.replace(/\//g, '')}`}>
          <img src={item.image} alt={item.name}/>
        </Link>
      </div>
      <div className="wishlist-specs">
        <h3>{item.price}</h3>
        <h2><Link to={`/${item.category}/${item.name.replace(/\//g, '')}`}>{item.name}</Link></h2>
      </div>
    </div>
  );
}

export default ListInfoSection;
