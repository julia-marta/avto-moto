import React, {useState, useEffect, useCallback} from 'react';
import Product from "../product/product";
import Information from "../information/information";
import Modal from "../modal/modal";
import {defaultAnimation, Key} from "../../const";

const Main = () => {

  const [isModalActive, setModalActive] = useState(false);
  const [modalAnimation, setAnimation] = useState(defaultAnimation);

  useEffect(() => {
    if (isModalActive) {
      document.body.style.overflow = `hidden`;
      document.addEventListener(`keydown`, handleEscKeyDown);
    } else {
      document.body.style.overflow = `auto`;
      document.removeEventListener(`keydown`, handleEscKeyDown);
    }
  });

  const handleModalOpening = useCallback(
    (evt) => {
      evt.preventDefault();
      setModalActive(true);
    }, []
  );

  const handleModalClosing = useCallback(
    (evt) => {
      evt.preventDefault();
      setModalActive(false);
      setAnimation(defaultAnimation);
    }, []
  );

  const handleModalError = useCallback(
    () => {
      setAnimation({ ...modalAnimation, shake: true });
    }, [modalAnimation]
  );

  const handleModalAnimation = useCallback(
    () => {
      if (modalAnimation.fadein) {
        setAnimation({ ...modalAnimation, fadein: false });
      }

      if (modalAnimation.shake) {
        setAnimation({ ...modalAnimation, shake: false });
      }

      return;

    }, [modalAnimation]
  );

  const handleEscKeyDown = useCallback(
    (evt) => {
      if (evt.key === Key.ESCAPE || evt.key === Key.ESC) {
        evt.preventDefault();
        setModalActive(false);
        setAnimation({ ...modalAnimation, fadein: true });
      }
    }, [modalAnimation]
  );

  return (
    <main className="main">
      <h1 className="visually-hidden">Сайт компании «Авто Мото»</h1>
        <Product />
        <Information onReviewButtonClick={handleModalOpening}  />
        <Modal isActive={isModalActive} animation={modalAnimation} handleClose={handleModalClosing}
        handleError={handleModalError} handleAnimation={handleModalAnimation} />
    </main>
  );
};

export default Main;
