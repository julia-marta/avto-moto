import React from 'react';
import PropTypes from "prop-types";
import {Contact} from "../../const";

const ContactsItem = ({title, value}) => {

    return (
      <li className="contacts__item">
        <p className="contacts__text contacts__text--title">{title}</p>
          {title === Contact.ADDRESS.title &&
            <p className="contacts__text contacts__text--value">
              <span className="contacts__text contacts__text--value">{value.town},</span>
              {value.street}
            </p>
          }
          {title === Contact.MODE.title &&
            <p className="contacts__text contacts__text--value">{value}</p>
          }
          {title === Contact.PHONE.title &&
            <a className="contacts__text contacts__text--value" href={`tel:${value}`}>{value}</a>
          }
          {title === Contact.EMAIL.title &&
            <a className="contacts__text contacts__text--value" href={`mailto:${value}`}>{value}</a>
          }
      </li>
    )
}

ContactsItem.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      town: PropTypes.string,
      street: PropTypes.string
    })
  ]).isRequired,
};

export default ContactsItem;
