import React, {useState, useCallback} from 'react';
import SliderButton from "../slider-button/slider-button";
import {SliderControl} from "../../const";
import slidesProp from "../../prop-types/slides.prop";

const {NEXT, BACK} = SliderControl;

const Slider = ({slides}) => {

  const [current, setCurrent] = useState(0);

  const handleButtonClick = useCallback(
    (evt) => {
      if (evt.target.id === NEXT) {
        setCurrent(current + 1);
      } else {
        setCurrent(current - 1);
      }

    }, [current]
  );

  const handleTouchStart = useCallback(
    () => {
      switch (current) {
        case slides.length - 1:
          setCurrent(0);
        break;
        default:
          setCurrent(current + 1);
      }
    }, [current, slides]
  );

  return (
    <div className="product__photos slider">

      <div className="slider__display" onTouchStart={handleTouchStart}>
        {slides.map((slide, index) => {
          return <picture className={`slider__picture ${index === current ? `slider__picture--active` : ``}`} key={index + 1}>
            <source type="image/webp" srcSet={`img/${slide}.webp 1x, img/${slide}@2x.webp 2x`} />
            <img src={`img/${slide}.jpg`} srcSet={`img/${slide}@2x.jpg 2x`} width="600" height="375" alt="Фото автомобиля" />
          </picture>
        })}
      </div>

      <div className="slider__navigation">
        <SliderButton type={BACK} disabled={current === 0} onClick={handleButtonClick} />
        <ul className="slider__preview-list">
          {slides.map((slide, index) => {
            return <li key={index + 1} className="slider__preview-item">
              <picture className="slider__preview">
               <source type="image/webp" srcSet={`img/${slide}.webp 1x, img/${slide}@2x.webp 2x`} />
               <img src={`img/${slide}.jpg`} srcSet={`img/${slide}@2x.jpg 2x`} width="128" height="80" alt="Превью фото" />
              </picture>
            </li>
          })}
        </ul>
        <SliderButton type={NEXT} disabled={current === slides.length - 1} onClick={handleButtonClick} />
      </div>
    </div>
  );
};

Slider.propTypes = {
  slides: slidesProp,
};

export default Slider;
