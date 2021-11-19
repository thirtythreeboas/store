import React, { Component } from 'react';
import '../../../css/stylesheet.scss';

const SliderContent = props => {

  const css = {
    display: 'flex',
    width: `${props.width}px`,
    minWidth: `360px`,
    height: `${props.height <= 400 ? 200 : props.height <= 500 ? 250 : props.height <= 750 ? 300 : 400}px`,
    transform: `translateX(-${props.translate}px)`,
    transition: `${props.transition}`
  };

  return (
    <div className='smooth' style={css}>
      {props.children}
    </div>
  )
};

export default SliderContent;
