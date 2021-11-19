import React, { useState, useEffect, useRef } from 'react';
import SliderContent from './SliderContent';
import Slide from './Slide';
import Arrow from './Arrow';
import Dots from './Dots';
import '../../../css/stylesheet.scss';

const Slider = () => {

  const images = [
    'https://c.files.bbci.co.uk/0D21/production/_113616330_red.png',
    'https://www.phoneworld.com.pk/wp-content/uploads/2020/01/top-selling-products-blog-banner.jpg',
    'https://astrolifescience.com/wp-content/uploads/2021/04/Businesses-growth-post.png',
    'https://www.incimages.com/uploaded_files/image/1920x1080/IN0316INA07-web_80579.jpg'
  ];

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
                key={i}
                width={width}
                content={slide}
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
