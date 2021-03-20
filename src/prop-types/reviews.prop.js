import {arrayOf, shape, string, number, instanceOf} from "prop-types";

export default arrayOf(shape({
    name: string.isRequired,
    advantages: string.isRequired,
    disadvantages: string.isRequired,
    comment: string.isRequired,
    rating: number.isRequired,
    date: instanceOf(Date).isRequired,
  })).isRequired;
