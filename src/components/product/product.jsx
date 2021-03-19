import React from 'react';
import Slider from "../slider/slider";

const Product = () => {

  return (
    <section className="product">
      <h2 className="visually-hidden">Полное описание автомобиля</h2>
        <div className="product__wrapper container">
        <Slider />
      </div>
    </section>
  );
};

export default Product;