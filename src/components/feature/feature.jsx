import React from 'react';
import PropTypes from "prop-types";
import Icon from "../icon/icon";
import {IconType} from "../../const";

const Feature = ({title, value}) => {

    return (
      <li className="details__feature">
        <Icon icon={IconType[`${title.toUpperCase()}`]} />
        <p className="details__feature-title">{value}</p>
      </li>
    )
}

Feature.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Feature;
