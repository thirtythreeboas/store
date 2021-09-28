import React from 'react'
import leftArrow from './img/angle-left.svg'
import rightArrow from './img/angle-right.svg'

const Arrow = ({ direction, handleClick, width }) => {
  const css = {
    display: 'flex',
    position: 'absolute',
    // top: `${width <= 350 ? 45 : 45}%`,
    top: '45%',
    [`${direction === 'right' ? 'right' : 'left'}`]: direction === 'right' ? '25px' : '25px',
    height: `${width <= 500 ? 30 : 50}px`,
    width: `${width <= 500 ? 30 : 50}px`,
    padding: `${width <= 500 ? 7 : 0}px`,
    justifyContent: 'center',
    background: '#fff',
    opacity: '0.8',
    borderRadius: '4px',
    cursor: 'pointer',
    alignItems: 'center',
    userSelect: 'none',
    transition: 'transform ease-in 0.1s'
  };

  const imgCss = {
    transform: `translateX(${direction === 'left' ? '-2' : '2'}px)`
  };


  return (
    <div
      className="arrow"
      style={css}
      onClick={handleClick}>
        {direction === 'right' ? <img style={imgCss} src={rightArrow} /> : <img style={imgCss} src={leftArrow} />}
    </div>
  )
}

export default Arrow;
