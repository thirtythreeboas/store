import React, { useState, useEffect } from 'react';
import '../../css/stylesheet.scss';
import { getData } from '../../data/data';
import Slider from './slider/Slider';
import Card from './Card';
import Content from './content/Сontent';

const Container = () => {

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
            {data.cardAd.map((section, i) => (
                <Card
                  key={section.key}
                  section={section}
                />
            ))}
          </div>
          <Content
            data={data}
            windowWidth={width}
          />
        </div>
      </div>
    </div>
  );
}

export default Container;
