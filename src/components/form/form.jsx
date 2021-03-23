import React, {Fragment, useState, useCallback, useEffect, useRef} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Error from "../error/error";
import Icon from "../icon/icon";
import {saveReviewData, clearReviewData, addReview} from "../../store/slice";
import initRevewProp from "../../prop-types/init-review.prop";
import {validateFields} from "../../utils";
import {STARS, FormRequiredInput, IconType, defaultTouchedStatus} from "../../const";

const Form = ({reviewData, saveFormData, clearFormData, saveReview}) => {
  const {NAME, COMMENT} = FormRequiredInput;
  const RATINGS = STARS.slice().reverse();

  const inputName= useRef();

  const [isTouched, setStatus] = useState(defaultTouchedStatus);

  useEffect(() => {
    if (!isTouched.username) {
      inputName.current.focus();
    }
  });

  const errors = validateFields(reviewData.username, reviewData.comment);

  const shouldMarkError = (field) => {
    const isError = errors[field];
    const shouldShow = isTouched[field];

    return isError ? shouldShow : false;
  };

  const handleBlur = useCallback(
    (field) => (_evt) => {
      setStatus({ ...isTouched, [field]: true });
    }, [isTouched]
  );

  const handleFieldChange = useCallback(
    (evt) => {
        saveFormData({...reviewData, [evt.target.name]: evt.target.value});
    }, [reviewData, saveFormData]
  );

  const handleFormSubmit = useCallback(
    (evt) => {
      evt.preventDefault();

      if (errors.username || errors.comment) {
        setStatus({ ...isTouched, comment: true });
        return;
      }

      saveReview(reviewData);
      clearFormData();
      setStatus(defaultTouchedStatus);

    }, [errors, reviewData, clearFormData, saveReview, isTouched]
  );

  return (
    <form action="#" className="modal__form form" onSubmit={handleFormSubmit}>
      <div className="form__wrapper">
        <fieldset className="form__item form__item--input form__item--required">
          {shouldMarkError(NAME) ? <Error /> : ``}
          <label className="visually-hidden" htmlFor={NAME}>Имя пользователя</label>
          <input ref={inputName} className={`form__input ${shouldMarkError(NAME) ? `form__input--error` : ``}`}
          type="text" id={NAME} name={NAME} placeholder="Имя" value={reviewData[NAME]}
          onChange={handleFieldChange} onBlur={handleBlur(NAME)}
          />
        </fieldset>
        <fieldset className="form__item form__item--rating">
          <p className="form__subtitle">Оцените товар:</p>
          <div className="form__rating">
            {RATINGS.map((star, i) => (
              <Fragment key={i + 1}>
                <input className="visually-hidden form__rating-input" id={`star-${star}`} type="radio" name="rating"
                value={star} checked={reviewData.rating === star} onChange={handleFieldChange} />
                <label className="form__star" htmlFor={`star-${star}`}>
                  <Icon icon={IconType.STAR_LARGE} />
                </label>
              </ Fragment>
            ))}
          </div>
        </fieldset>
        <fieldset className="form__item form__item--input">
          <label className="visually-hidden" htmlFor="advantages">Достоинства</label>
          <input className="form__input" type="text" id="advantages" name="advantages"
          placeholder="Достоинства" value={reviewData.advantages} onChange={handleFieldChange} />
        </fieldset>
        <fieldset className="form__item form__item--input">
          <label className="visually-hidden" htmlFor="disadvantages">Недостатки</label>
          <input className="form__input" type="text" id="disadvantages" name="disadvantages" 
          placeholder="Недостатки" value={reviewData.disadvantages} onChange={handleFieldChange} />
        </fieldset>
        <fieldset className="form__item form__item--comment form__item--required">
          {shouldMarkError(COMMENT) ? <Error /> : ``}
          <textarea className={`form__input form__input--textarea ${shouldMarkError(COMMENT) ? `form__input--error` : ``}`}
            name={COMMENT} placeholder="Комментарий" value={reviewData[COMMENT]}
            onChange={handleFieldChange} onBlur={handleBlur(COMMENT)}
          />
        </fieldset>
      </div>
    <button className="form__submit button" type="submit" >Оставить отзыв</button>
  </form>
  );

};

Form.propTypes = {
  reviewData: initRevewProp,
  saveFormData: PropTypes.func.isRequired,
  clearFormData: PropTypes.func.isRequired,
  saveReview: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => ({
  reviewData: store.reviewData,
});

const mapDispatchToProps = (dispatch) => ({
  saveFormData(data) {
    dispatch(saveReviewData(data));
  },
  clearFormData() {
    dispatch(clearReviewData());
  },
  saveReview(data) {
    dispatch(addReview(data));
  },
});

export {Form};
export default connect(mapStateToProps, mapDispatchToProps)(Form);
