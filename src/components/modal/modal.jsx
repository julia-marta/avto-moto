import React, {Fragment} from 'react';
import PropTypes from "prop-types";
import Form from "../form/form";

const Modal = ({isActive}) => {

  return (
    <Fragment>
      {isActive && <section className="modal">
        <div className="modal__window">
          <h2 className="modal__title">Оставить отзыв</h2>
          <button type="button" className="modal__close" aria-label="Закрыть окно" />
          <Form />
        </div>
      </section>
      }
    </Fragment>
  );
};

Modal.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default Modal;
