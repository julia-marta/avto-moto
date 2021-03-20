import React from 'react';
import PropTypes from "prop-types";

const MenuItem = ({title}) => {

    return (
      <li className="menu__item">
        {/* eslint-disable-next-line */}
        <a className="menu__link" href="#">{title}</a>
      </li>
    )
}

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MenuItem;
