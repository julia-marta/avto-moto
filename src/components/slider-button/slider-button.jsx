import React from 'react';
import PropTypes from "prop-types";
import Icon from "../icon/icon";
import {IconType} from "../../const";

const SliderButton = ({type, disabled}) => {

  return (
    <button type="button" classname={`slider__button slider__button--${type} ${disabled ? `slider__button--disabled` : ``}`} disabled={disabled}>
      <Icon icon={IconType[`${type.toUpperCase()}`]} />
    </button>
  );
};

SliderButton.propTypes = {
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default SliderButton;
