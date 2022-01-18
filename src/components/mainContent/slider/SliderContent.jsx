import React from 'react';
import '../../../css/stylesheet.scss';

const SliderContent = props => {

  const css = {
    display: 'flex',
    width: `${props.width}px`,
    minWidth: `360px`,
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
