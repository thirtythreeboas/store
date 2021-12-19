import React from 'react';
import { Link } from 'react-router-dom';
import '../../../css/stylesheet.scss';

export default function Goods ({ section, path }) {

  const css = {
    textDecoration: 'none',
    color: 'black'
  }

  return (
    <div className='card-content'>
      <Link style={css} to={`/${path}`}>
        <div className="card">
          <div className="image-card-container">
            <img src={section.image} alt={section.name} />
          </div>
          <p>{section.description}</p>
        </div>
      </Link>
    </div>
  )
};
