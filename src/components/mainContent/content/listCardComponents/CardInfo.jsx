import React from 'react';
import '../../../../css/listcard.scss';
import { Link } from 'react-router-dom';

const CardInfo = ({
    item,
    path
  }) => {

  const listToRender = Object.entries(item.detail).slice(0, 5);

  return (
    <div className="card-info">
      <Link to={`/${path}/${item.name.replace(/\//g, '')}`}>
        <div className="card-img">
          <img src={item.image} alt={item.name} />
        </div>
      </Link>
      <div className="card-detail">
        <h5>{item.name}</h5>
        <div className="card-specs">
        {
          listToRender.map(([key, value]) => (
            <dl className="dl-styles" key={value.toString()}>
              <dt className="dt-styles"><span>{key}</span></dt>
              <dd className="dd-styles">{value.toString()}</dd>
            </dl>
          ))
        }
        </div>
      </div>
    </div>
  );
}

export default CardInfo;
