import React, { useState, useEffect, useRef } from 'react';
import '../../../css/stylesheet.scss';
import { getSliderImages } from '../../../data/data';
import SliderContent from './SliderContent';
import Slide from './Slide';
import Arrow from './Arrow';
import Dots from './Dots';

const Slider = () => {

  const images = getSliderImages();

  const generateKey = param => {
    return `${ param }_${ new Date().getTime() }`;
  }

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
    let arr = [...images];
    arr.unshift(arr[3]);
    arr.push(arr[1]);
    setSlides([...arr]);
  }, [images]);

  useEffect(() => {
    let slider = document.getElementById('slider-component');
    const handleWidthValue = () => {
      let width = slider.clientWidth <= 360 ? 360 : slider.clientWidth;
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

    handleWidthValue();
    window.addEventListener('resize', handleWidthValue);
    slider.addEventListener('transitionend', handleTransition)

    return () => {
      window.removeEventListener('resize', handleWidthValue);
      slider.removeEventListener('transitionend', handleTransition);
    }
  }, [activeSlide, transition]);


  useEffect(() => {
    let execute = true;

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

    if (execute === true) transEnd.current = smooth;
    return () => {
      execute = false;
    }
  }, [activeSlide])

  useEffect(() => {
    const fun = e => {
      if (e.target.className.includes('smooth')) transEnd.current();
    }
    let slider = document.getElementById('slider-component');
    slider.addEventListener('transitionend', fun);
    return () => {
      slider.removeEventListener('transitionend', fun);
    }
  }, [activeSlide]);

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

  return (
    <div id="slider-component">
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
              key={generateKey(i)}
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
