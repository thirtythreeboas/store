import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/stylesheet.scss';

const Card = ({section}) => {


  return (
    <Link to="/phones">
      <div className='card-content'>
        <div className="card">
          <div className="image-card-container">
            <img src={section.image} alt=""/>
          </div>
          <p>
            {
              section.description
            }
          </p>
        </div>
      </div>
    </Link>
  )
}

export default Card;
