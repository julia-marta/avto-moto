import React, {useState} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import SliderButton from "../slider-button/slider-button";

const Slider = ({slides}) => {

  const [current] = useState(0);
  const count = slides.length;


  return (
    <div className="product__photos slider">
      <div className="slider__display">
        <picture>
          <source type="image/webp" srcSet={`img/${slides[current]}.webp 1x, img/${slides[current]}@2x.webp 2x`} />
          <img className="slider__picture" src={`img/${slides[current]}.jpg`} srcSet={`img/${slides[current]}@2x.jpg 2x`} width="600" height="375" alt="Фото автомобиля" />
        </picture>
      </div>
      <div className="slider__navigation">
        <SliderButton type={`back`} disabled={current === 0} />
        <ul className="slider__preview">
          {slides.map((slide) => {
            return <li className="slider__preview-item">
              <picture>
               <source type="image/webp" srcSet={`img/${slide}.webp 1x, img/${slide}@2x.webp 2x`} />
               <img className="slider__picture" src={`img/${slide}.jpg`} srcSet={`img/${slide}@2x.jpg 2x`} width="128" height="80" alt="Превью фото" />
              </picture>
            </li>
          })}
        </ul>
        <SliderButton type={`next`} disabled={current === count} />
      </div>

      </div>
  );
};

Slider.propTypes = {
    slides: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

const mapStateToProps = (store) => ({
  slides: store.productData.photos,
});

export {Slider};
export default connect(mapStateToProps)(Slider);
