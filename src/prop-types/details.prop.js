import {shape, number, string} from "prop-types";

export default shape({
  title: string.isRequired,
  features: shape({
    fuel: string.isRequired,
    transmission: string.isRequired,
    power: string.isRequired,
    volume: string.isRequired,
    }).isRequired,
  price: number.isRequired,
  oldPrice: number,
  payment: number.isRequired,
}).isRequired;
