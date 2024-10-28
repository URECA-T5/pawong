import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ImageContainer } from '../../style/donation/donation-item-detail';

const ImageSlide = () => {
  var settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <ImageContainer>
      <Slider {...settings}>
        <img
          src="https://sitem.ssgcdn.com/15/52/01/item/1000030015215_i2_1200.jpg"
          alt=""
        />
        <img
          src="https://sitem.ssgcdn.com/15/52/01/item/1000030015215_i3_1200.jpg"
          alt=""
        />
        <img
          src="https://sitem.ssgcdn.com/15/52/01/item/1000030015215_i4_1200.jpg"
          alt=""
        />
      </Slider>
    </ImageContainer>
  );
};

export default ImageSlide;
