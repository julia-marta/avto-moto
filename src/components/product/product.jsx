import React from 'react';
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
  
};

export {Product};
export default connect(mapStateToProps)(Product);
