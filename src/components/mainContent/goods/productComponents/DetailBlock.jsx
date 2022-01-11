import React from 'react';
// css/commonProductStyles.scss
import '../../../../css/stylesheet.scss';

const DetailBlock = ({ detail }) => {

  return (
    <div className="detail-block">
      <h2>Product information</h2>
        <div className="specifications">
          {
            detail.map(([key, value]) => (
              <dl className="dl-styles" key={value.toString()}>
                <dt className="dt-styles"><span>{key}</span></dt>
                <dd className="dd-styles">{value.toString()}</dd>
              </dl>
            ))
          }
      </div>
    </div>
  );
}

export default DetailBlock;
