import React, { Component } from 'react';
import '../../../css/stylesheet.scss';

const SliderContent = props => {
  // every 210px of width height have to be reduced by 40px

  const css = {
    transform: `translateX(-${props.translate}px)`,
    transition: `${props.transition}`,
    height: `${props.height <= 400 ? 200 : props.height <= 500 ? 250 : props.height <= 750 ? 300 : 400}px`,
    maxWidth: `${props.width * props.slides}px`,
    width: `${props.width}px`,
    display: 'flex'
  };

  return (
    <div className='smooth' style={css}>
      {props.children}
    </div>
  )
};

export default SliderContent;
