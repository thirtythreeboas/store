import React, { useEffect } from 'react';
import '../../css/stylesheet.scss';

const Card = ({section}) => {


  return (
    <div className='card-content'>
      <div className="card">
        <a href="">
          <img src={section.image} alt=""/>
        </a>
        <p>
          {
            section.description
          }
        </p>
      </div>
    </div>
  )
}

export default Card;
