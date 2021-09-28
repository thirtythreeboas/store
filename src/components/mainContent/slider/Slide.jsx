import React from 'react';
import '../../../css/stylesheet.scss';

const Slide = ({ content, width }) => {

  const css = {
    height: '100%',
    // width: '100%',
    minWidth: `${width <= 1050 ? width : 1050}px`,
    backgroundImage: `url( ${content} )`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  }

  return (
    <div style={css}></div>
  )
}

export default Slide
