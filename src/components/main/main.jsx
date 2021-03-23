import React, {useState} from 'react';
import Product from "../product/product";
import Information from "../information/information";
import Modal from "../modal/modal";

const Main = () => {

  const [isModalActive, setModalStatus] = useState(false);

  return (
    <main className="main">
      <h1 className="visually-hidden">Сайт компании «Авто Мото»</h1>
        <Product />
        <Information />
        <Modal isActive={isModalActive} />
    </main>
  );
};

export default Main;
