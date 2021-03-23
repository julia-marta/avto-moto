import {shape, string, number, instanceOf} from "prop-types";

export default shape({
    username: string.isRequired,
    advantages: string,
    disadvantages: string,
    comment: string.isRequired,
    rating: number.isRequired,
    date: instanceOf(Date).isRequired,
  }).isRequired;
