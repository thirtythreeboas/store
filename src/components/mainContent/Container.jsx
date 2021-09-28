import React, { Component } from 'react';
import '../../css/stylesheet.scss';
import Slider from './slider/Slider';
import Card from './Card';
import Content from './content/Сontent';

const Container = ({data,  windowWidth}) => {

  return (
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
          windowWidth={windowWidth}
        />
      </div>
    </div>
  );
}

export default Container;
