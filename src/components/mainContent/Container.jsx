import React, { useState, useEffect } from 'react';
import '../../css/stylesheet.scss';
import { getData } from '../../data/data';
import Slider from './slider/Slider';
import Goods from './content/Goods';
import Content from './content/Сontent';

const Container = ({ addToCartButton, cart }) => {

  const [width, setWidth] = useState(0);

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWidth(width);
  };

  const data = getData();

  const containerDisplay = width >= 768 ? document.querySelector('.main-container').style.display = 'flex' : false;

  return (
    <div className="main-container">
      <Slider/>
      <Goods
        data={data}
      />
      <Content
        cart={cart}
        data={data}
        windowWidth={width}
        addToCartButton={addToCartButton}
      />
    </div>
  );
}

export default Container;
