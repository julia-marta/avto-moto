import React from 'react';
import Icon from "../icon/icon";
import {STARS, IconType} from "../../const";
import reviewProp from "../../prop-types/review.prop";
import {formatDate} from "../../utils";

const Review = ({data}) => {

    return (
      <li className="reviews__item review">
        <p className="review__author">{data.username}</p>
        <dl className="review__content-list">
          <dt className="review__title review__title--vantage review__title--plus">Достоинства</dt>
            <dd className="review__text review__text--vantage">{data.advantages ? data.advantages : `Не указано`}</dd>
          <dt className="review__title review__title--vantage review__title--minus">Недостатки</dt>
            <dd className="review__text review__text--vantage">{data.disadvantages ? data.disadvantages : `Не указано`}</dd>
          <dt className="review__title">Комментарий</dt>
            <dd className="review__text">{data.comment}</dd>
        </dl>
        <div className="review__rating">
          <ul className="review__star-list">
            {STARS.map((star, i) => (
              <li key={i + 1} className={`review__star ${star <= data.rating ? `review__star--active` : ``}`}>
                <Icon icon={IconType.STAR} />
              </li>
          ))}
          </ul>
          <p className="review__recommendation">{data.rating > 2 ? `Советует` : `Не советует`}</p>
        </div>
        <div className="review__footer">
          <time className="review__date" dateTime={data.date.toISOString()}>{formatDate(data.date)}</time>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="review__reply">Ответить</a>
        </div>
      </li>
    )
}

Review.propTypes = {
  data: reviewProp,
};

export default Review;
