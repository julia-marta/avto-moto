import React from 'react';
import Product from "../product/product";
import Information from "../information/information";

const Main = () => {

  return (
    <main className="main">
      <h1 className="visually-hidden">Сайт компании «Авто Мото»</h1>
        <Product />
        <Information />
    </main>
  );
};

export default Main;
