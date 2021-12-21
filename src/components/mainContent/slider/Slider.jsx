import React, { useState, useEffect, useRef } from 'react';
import SliderContent from './SliderContent';
import Slide from './Slide';
import Arrow from './Arrow';
import Dots from './Dots';
import '../../../css/stylesheet.scss';

const Slider = () => {
  
  const images = [
    {
      name: 'ROCCAT Vulcan TKL Linear PC Gaming Keyboard',
      image: 'https://i.ytimg.com/vi/IPrXJDHA6Jk/maxresdefault.jpg',
      path: 'devices'
    },
    {
      name: 'Apple iPhone 12 Pro Max 512GB',
      image: 'http://t.infibeam.com/img/html_widget_images/8687242/af9e3a85ffaae_capture.jpg.999xx.jpg',
      path: 'phones'
    },
    {
      name: '2021 HP Pavilion 15.6 Touch-Screen Laptop 4 Core Intel i5-1035G1',
      image: 'https://m.media-amazon.com/images/S/aplus-media/vc/099c834d-e88b-4516-9b20-707f0205e518.__CR0,0,1464,600_PT0_SX1464_V1___.jpg',
      path: 'devices'
    },
    {
      name: 'BenQ MOBIUZ EX2510 24.5 Inch 144Hz IPS Gaming Monitor',
      image: 'https://www.benq.com/content/dam/b2c/en-ap/monitor/E-Series/ex2710/has-01.jpg',
      path: 'devices'
    }
  ]

  let array = images;

  const transEnd = useRef();

  const [width, setWidth] = useState(0);
  const [slides, setSlides] = useState([]);
  const [state, setState] = useState({
    activeSlide: 1,
    translate: width,
    transition: 'initial'
  });

  const { activeSlide, translate, transition } = state;

  useEffect(() => {
    array.unshift(images[3]);
    array.push(images[1]);
    setSlides(array);
  }, []);

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    window.addEventListener('transitionend', handleTransition)

    return () => window.removeEventListener('resize', updateDimensions);
    return () => window.removeEventListener('transitionend', handleTransition);
  }, [activeSlide]);

  const updateDimensions = () => {
    let width = window.innerWidth <= 360 ? 360 : window.innerWidth;
    setWidth(width);
    setState((prevState) => ({
      ...prevState,
      translate: `${width <= 1050 ? (width * activeSlide) : 1050 * activeSlide}`
    }));
  };

  const handleTransition = () => {
    if (transition === 'initial')
    setState((prevState) => ({...prevState, transition: 'transform ease-out 0.45s'}));
    if (transition === 'transform ease-out 0.45s')
    setState((prevState) => ({...prevState, transition: 'initial'}))
  }

  useEffect(() => {
    transEnd.current = smooth;
  })

  useEffect(() => {
    const fun = e => {
      if (e.target.className.includes('smooth')) {
        transEnd.current();
      }
    }
    const transitionEnd = window.addEventListener('transitionend', fun);
    return () => {
      window.removeEventListener('transitionend', transitionEnd);
    }
  });

  const handleSlide = e => {
    let arr = Array.from(document.getElementsByClassName('dotsArray'));

    setState((prevState) => ({
      ...prevState,
      transition: 'transform ease-out 0.45s',
      activeSlide: arr.indexOf(e.target) + 1,
      translate: width * (arr.indexOf(e.target) + 1)
    }))
  };

  const nextSlide = () => {
    console.log('kek');
    if (activeSlide >= slides.length - 1) return;
    setState((prevState) => ({
      ...prevState,
      transition: 'transform ease-out 0.45s',
      activeSlide: activeSlide + 1,
      translate: width * (activeSlide + 1)
    }))
  }

  const prevSlide = () => {
    if (activeSlide <= 0) return;
    setState((prevState) => ({
     ...prevState,
     transition: 'transform ease-out 0.45s',
     activeSlide: activeSlide - 1,
     translate: width * (activeSlide - 1)
   }))
  }

  const smooth = () => {
    if (activeSlide === 0)
    setState((prevState) => ({
      ...prevState,
      transition: 'none',
      activeSlide: slides.length - 2,
      translate: width * (slides.length - 2)
    }))
    if (activeSlide === 5)
    setState((prevState) => ({
      ...prevState,
      transition: 'none',
      activeSlide: slides.length - activeSlide,
      translate: width * (slides.length - activeSlide)
    }))
  }

  const slider = {
    position: `relative`,
    width: `${width}px`,
    minWidth: `360px`,
    maxWidth: `1050px`,
    marginBottom: '25px',
    overflow: `hidden`
  };

  return (
      <div style={slider}>
        <SliderContent
          width={width * slides.length}
          slides={slides.length}
          height={width}
          translate={translate}
          transition={transition}
        >
          {
            slides.map((slide, i) => (
              <Slide
                key={i + slide.name}
                width={width}
                content={slide.image}
                name={slide.name}
                path={slide.path}
              />
            ))
          }
        </SliderContent>
        <Arrow
          direction='right'
          width={width}
          handleClick={nextSlide}
        />
        <Arrow
          direction='left'
          width={width}
          handleClick={prevSlide}
        />
        <Dots
          width={width}
          activeSlide={activeSlide}
          slides={images}
          handleSlide={handleSlide}
        />
      </div>
  )
}

export default Slider;
