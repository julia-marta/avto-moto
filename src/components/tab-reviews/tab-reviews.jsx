import React from 'react';
import PropTypes from "prop-types";
import Review from "../review/review";
import Button from "../button/button";
import reviewProp from "../../prop-types/review.prop";

const TabReviews = ({reviews}) => {

    return (
      <div className="information__tab reviews">
        <ul className="reviews__list">
          {reviews.map((review, i) => (
            <Review key={i + 1} data={review} />
          ))}
        </ul>
        <Button title={`Оставить отзыв`} className={`reviews__button`} type={`light`} />
      </div>
    )
}

TabReviews.propTypes = {
  reviews: PropTypes.arrayOf(reviewProp),
};

export default TabReviews;
