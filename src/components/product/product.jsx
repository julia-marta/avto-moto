import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Slider from "../slider/slider";
import Details from "../details/details";

const Product = ({product}) => {

  return (
    <section className="product">
      <h2 className="visually-hidden">Полное описание автомобиля</h2>
        <div className="product__wrapper container">
          <Slider slides={product.photos} />
          <Details details={product.details} />
      </div>
    </section>
  );
};

const mapStateToProps = (store) => ({
  product: store.productData,
});

Product.propTypes = {
  product: PropTypes.shape({
    details: PropTypes.shape({
      title: PropTypes.string.isRequired,
      features: PropTypes.shape({
        fuel: PropTypes.string.isRequired,
        transmission: PropTypes.string.isRequired,
        power: PropTypes.string.isRequired,
        volume: PropTypes.string.isRequired,
        }).isRequired,
      price: PropTypes.number.isRequired,
      oldPrice: PropTypes.number,
      payment: PropTypes.number.isRequired,
    }),
    photos: PropTypes.arrayOf(PropTypes.string).isRequired,
  })
};

export {Product};
export default connect(mapStateToProps)(Product);
