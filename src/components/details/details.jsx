import React from 'react';
import PropTypes from "prop-types";
import Feature from "../feature/feature";

const Details = ({details}) => {

    const formatSum = (sum) => {
      return new Intl.NumberFormat('ru-RU').format(sum);
    }

   const oldPrice = formatSum(details.oldPrice).toString();

  return (
    <div className="product__info details">
       <h3 className="details__title">{details.title}</h3>
       <ul className="details__feature-list">
         {Object.keys(details.features).map((item, i) => (
          <Feature key ={i + 1} title={item} value={details.features[item]} />
        ))}
       </ul>
       <div className="details__price">
         <p className="details__sum">{formatSum(details.price)} &#8381;</p>
         <p className="details__old-sum">{`${oldPrice.charAt(0)} ${oldPrice.substr(1)}`} &#8381;</p>
       </div>
    </div>
  );
};

export default Details;