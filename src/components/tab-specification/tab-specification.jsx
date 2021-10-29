import React from 'react';
import {SpecificationAlias} from "../../const";
import specificationProp from "../../prop-types/specification.prop";

const TabSpecification = ({data}) => {

    return (
      <div className="information__tab specification">
        <ul className="specification__list">
          {Object.keys(SpecificationAlias).map((alias, i) => (
            <li key={i + 1} className="specification__item">
              <p className="specification__text">{SpecificationAlias[alias]}</p>
              <p className="specification__text specification__text--value">{data[alias.toLowerCase()]}</p>
            </li>
          ))}
        </ul>
      </div>
    )
}

TabSpecification.propTypes = {
  data: specificationProp,
};

export default TabSpecification;
