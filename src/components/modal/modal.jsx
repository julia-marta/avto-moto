import React, {Fragment} from 'react';
import PropTypes from "prop-types";
import Form from "../form/form";

const Modal = ({isActive, animation, handleClose, handleError, handleAnimation}) => {

  return (
    <Fragment>
      {isActive && <section className="modal" onClick={handleClose}>
        <div className={`modal__window ${animation.fadein ? `modal__window--fade-in` : ``} ${animation.shake ? `modal__window--shake` : ``}`} 
        onAnimationEnd={handleAnimation} onClick={(evt) => evt.stopPropagation()}>
          <h2 className="modal__title">Оставить отзыв</h2>
          <button type="button" className="modal__close" aria-label="Закрыть окно" onClick={handleClose} />
          <Form onSubmitError={handleError} onSubmitSuccess={handleClose} />
        </div>
      </section>
      }
    </Fragment>
  );
};

Modal.propTypes = {
  isActive: PropTypes.bool.isRequired,
  animation: PropTypes.shape({
    fadein: PropTypes.bool.isRequired,
    shake: PropTypes.bool.isRequired,
  }).isRequired,
  handleClose: PropTypes.func.isRequired,
  handleError: PropTypes.func.isRequired,
  handleAnimation: PropTypes.func.isRequired,
};

export default Modal;
