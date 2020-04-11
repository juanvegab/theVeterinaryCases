import React, { Component } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.css';
import s from './style.module.scss';

class SimpleSlider extends Component {
  render() {

    const { images } = this.props;

    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div className={s.sliderWrapper}>
        { images && images.length
          ? <Slider {...settings}>
            { images.map((img, i) =>
              <div key={i} className={s.imageItem}>
                <img src={img.url} alt={img.filename} />
              </div>)}
          </Slider>
          : null
        }
      </div>
    );
  }
}

export default SimpleSlider;
