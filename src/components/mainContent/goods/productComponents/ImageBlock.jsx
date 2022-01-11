import React from 'react';
// css/commonProductStyles.scss
import '../../../../css/stylesheet.scss';

const ImageBlock = ({ data, width }) => {

  const handleImageChange = (e) => {
    const src = e.target.src;
    const block = document.getElementById('main-img');
    block.src = src;
  };

  const images = () => {
    if (data.images === undefined) return;
    return (
      <div className="product-images">
        {
          Object.values(data.images).map(elem =>
            <div key={elem} onClick={e => handleImageChange(e)}>
              <img src={elem} alt={data.name}/>
            </div>
          )
        }
      </div>
    )
  }

  return (
    <div className="image-block">
      {width > 767 ? images() : false}

      <div className="sub-image-block">
        {width < 768 ? <h2>{data.name}</h2> : null}
        <div className="image-container">
          <img id="main-img" src={data.image} alt={data.name}/>
        </div>
      </div>

      {width < 767 ? images() : false}
    </div>
  );
}

export default ImageBlock;
