import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Slider from "../slider/slider";
import Details from "../details/details";
import detailsProp from "../../prop-types/details.prop";
import slidesProp from "../../prop-types/slides.prop";

const Product = ({product}) => {

  return (
    <section className="product">
      <h2 className="visually-hidden">Полное описание автомобиля</h2>
        <div className="product__wrapper container">
          <div className="product__content">
          <Slider slides={product.photos} />
          <Details details={product.details} />
          </div>
      </div>
    </section>
  );
};

const mapStateToProps = (store) => ({
  product: store.productData,
});

Product.propTypes = {
  product: PropTypes.shape({
    details: detailsProp,
    photos: slidesProp,
  })
};

export {Product};
export default connect(mapStateToProps)(Product);
