import React, { useEffect } from 'react';

const Dot = ({ active, handleSlide, width }) => {
  const css = {
    width: `${width <= 400 ? 10 : 15}px`,
    height: `${width <= 400 ? 10 : 15}px`,
    // padding: '5px',
    marginRight: '5px',
    cursor: 'pointer',
    borderRadius: '50%',
    border: '2px solid #fff',
    background: `${active ? 'white' : 'none'}`
  }

  return (
    <span
      className="dotsArray"
      style={css}
      onClick={handleSlide}>
    </span>
  )
}

const Dots = ({ slides, activeSlide, handleSlide, width }) => {

  let num = activeSlide;

  if (activeSlide === 0) num = 4;
  if (activeSlide === 5) num = 1;

  useEffect(() => {
    const fun = () => num = activeSlide;
    fun();
  })

  const css = {
    position: 'absolute',
    bottom: `${width <= 400 ? 15 : 35}px`,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

  return (
    <div style={css}>
      {
        slides.map((slide, i) => (
          <Dot
            key={slide + i}
            width={width}
            handleSlide={handleSlide}
            active={num === (i + 1)} />
        ))
      }
    </div>
  )
}

export default Dots
