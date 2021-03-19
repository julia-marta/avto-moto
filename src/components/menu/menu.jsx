import React from 'react';
import PropTypes from "prop-types";
import MenuItem from "../menu-item/menu-item";

const Menu = ({type, items}) => {

  return (
      <ul className={`${type}__menu menu menu--${type}`}>
      {items.map((item, i) => (
        <MenuItem key ={i + 1} title={item} />
      ))}
      </ul>
  );
};

Menu.propTypes = {
  type: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Menu;
