import React from 'react';
import PropTypes from "prop-types";
import Feature from "../feature/feature";
import Button from "../button/button";

const Details = ({details}) => {

  const formatSum = (sum) => {
    return new Intl.NumberFormat('ru-RU').format(sum);
  }

  const rubSymbol = String.fromCharCode(0x20BD);
  const oldPrice = formatSum(details.oldPrice).toString();
  const creditPayment = formatSum(details.payment);

  return (
    <div className="product__info details">
      <div className="details__wrapper">
        <h3 className="details__title">{details.title}</h3>
         <ul className="details__feature-list">
           {Object.keys(details.features).map((item, i) => (
            <Feature key ={i + 1} title={item} value={details.features[item]} />
          ))}
         </ul>
         <div className="details__price">
          <p className="details__sum">{formatSum(details.price)} {rubSymbol}</p>
          <p className="details__old-sum">{`${oldPrice.charAt(0)} ${oldPrice.substr(1)}`} {rubSymbol}</p>
         </div>
      </div>
      <Button title={`Оставить заявку`} className={`details__button`} />
      <Button title={`В кредит от ${creditPayment} ${rubSymbol}`} className={`details__button`} type={`light`} />
    </div>
  );
};

Details.propTypes = {
  details: PropTypes.shape({
    title: PropTypes.string.isRequired,
    features: PropTypes.shape({
      fuel: PropTypes.string.isRequired,
      transmission: PropTypes.string.isRequired,
      power: PropTypes.string.isRequired,
      volume: PropTypes.string.isRequired,
    }).isRequired,
    price: PropTypes.number.isRequired,
    oldPrice: PropTypes.number,
    payment: PropTypes.number.isRequired,
  })
};

export default Details;
