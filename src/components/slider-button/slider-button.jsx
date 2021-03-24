import React from 'react';
import PropTypes from "prop-types";
import Icon from "../icon/icon";
import {IconType, SliderControl} from "../../const";

const SliderButton = ({type, disabled, onClick}) => {

  return (
    <button id={type} type="button" aria-label={type === SliderControl.NEXT ? `Вперёд` : `Назад`}
    className={`slider__button slider__button--${type}${disabled ? `slider__button--disabled` : ``}`} disabled={disabled}
    onClick={onClick}>
      <Icon icon={IconType[`${type.toUpperCase()}`]} />
    </button>
  );
};

SliderButton.propTypes = {
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SliderButton;
