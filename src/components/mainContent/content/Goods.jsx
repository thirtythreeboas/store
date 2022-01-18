import React from 'react';
import { Link } from 'react-router-dom';
import '../../../css/stylesheet.scss';

const Goods = ({ data }) => {

  return (
    <div className="showCards">
      {
        data.listsOfgoods.map((section, i) => (
          <Link key={i} className="card-content" to={`/${section.path}`}>
            <img src={section.image} alt={section.name} />
            <p>{section.description}</p>
          </Link>
        ))
      }
    </div>
  )
};

export default Goods;
