import React from 'react'
import leftArrow from './img/angle-left.svg'
import rightArrow from './img/angle-right.svg'

const Arrow = ({ direction, handleClick, width }) => {

  const css = {
    [`${direction === 'right' ? 'right' : 'left'}`]: direction === 'right' ? '25px' : '25px',
    height: `${width <= 500 ? 30 : 50}px`,
    width: `${width <= 500 ? 30 : 50}px`,
    padding: `${width <= 500 ? 7 : 0}px`,
  };


  return (
    <div
      className="arrow"
      style={css}
      onClick={() => handleClick()}>
        {direction === 'right' ? <img src={rightArrow} /> : <img src={leftArrow} />}
    </div>
  )
}

export default Arrow;
