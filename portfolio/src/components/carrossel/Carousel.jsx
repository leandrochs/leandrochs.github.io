import React, { useContext, useState } from 'react';
import { Context } from '../../context';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import dataDisplay from '../../data/dataDisplay';
import './carousel.css';

export default function Carousel(props) {
  const defaultSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  const { displayRef, setDisplayName } = useContext(Context);

  const [settings] = useState(defaultSettings);

  function onClick(name) {
    displayRef.current.scrollIntoView({ behavior: 'smooth' });
    setDisplayName(name);
  }

  return (
    <div className='Responsive-title-slider-container'>
      <h2 className='Responsive-h2-title'> TECNOLOGIAS </h2>
      <Slider {...settings} className='slider-container'>
        {dataDisplay
          .filter(({ type }) => type === `${props.type}`)
          .map(({ name, image }) => (
            <div
              className='Responsive-slider-card'
              key={name}
              onClick={() => onClick(name)}
            >
              <div className='Responsive-slider-name-image-container'>
                <img
                  src={image}
                  alt='card'
                  className='Responsive-slider-card-image'
                />

                <div className='Responsive-slider-card-name'>{name}</div>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
}
