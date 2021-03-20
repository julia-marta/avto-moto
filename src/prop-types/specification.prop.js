import {shape, string} from "prop-types";

export default shape({
  transmission: string.isRequired,
  power: string.isRequired,
  type: string.isRequired,
  drive: string.isRequired,
  volume: string.isRequired,
  torque: string.isRequired,
  cylinders: string.isRequired,
}).isRequired;
