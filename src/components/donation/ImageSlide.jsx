import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ImageContainer } from '../../style/donation/itemDetail';
import serverBaseUrl from '../../config/serverConfig';

const ImageSlide = ({ src_list }) => {
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
        {src_list.map((src, index) => {
          return (
            <img
              key={src + index}
              src={`${serverBaseUrl}/${src}`}
              alt="no images"
              className="image__item"
            />
          );
        })}
      </Slider>
    </ImageContainer>
  );
};

export default ImageSlide;
