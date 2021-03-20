import React from 'react';
import PropTypes from "prop-types";

const Button = ({title, className, type}) => {

    return (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a href="#" className={`${className} button ${type ? `button--${type}` : ``}`}>{title}</a>
    )
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Button;
