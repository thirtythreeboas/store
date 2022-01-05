import React, { useState, useEffect } from 'react';
import '../../../css/stylesheet.scss';
import { getData } from '../../../data/data';
import Slider from '../slider/Slider';
import Goods from './Goods';
import Content from './Сontent';

const Container = ({ addToCartButton }) => {

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
    <div className="main-container" style={{marginBottom: '50px'}}>
      <div className="container-comp-css">
        <Slider/>
        <div className="goods">
          <div className="showCards">
            {data.listsOfgoods.map((section, i) => (
                <Goods
                  key={section.key + section.name}
                  path={section.path}
                  section={section}
                />
            ))}
          </div>
          <Content
            data={data}
            windowWidth={width}
            addToCartButton={addToCartButton}
          />
        </div>
      </div>
    </div>
  );
}

export default Container;
