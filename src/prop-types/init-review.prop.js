import {shape, string} from "prop-types";

export default shape({
    username: string,
    advantages: string,
    disadvantages: string,
    comment: string,
    rating: string,
  }).isRequired;
