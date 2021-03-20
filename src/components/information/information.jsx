import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Tabs from "../tabs/tabs";
import TabSpecification from "../tab-specification/tab-specification";
import TabReviews from "../tab-reviews/tab-reviews";
import TabContacts from "../tab-contacts/tab-contacts";
import {Tab} from "../../const";
import specificationProp from "../../prop-types/specification.prop";
import reviewProp from "../../prop-types/review.prop";

const {SPECIFICATION, REVIEWS, CONTACTS} = Tab;

const Information = ({specification, reviews}) => {

  return (
    <section className="information">
      <h2 className="visually-hidden">Характеристики, отзывы, контакты</h2>
        <div className="information__wrapper container">
          <Tabs renderTab={(activeTab) => {
              switch (activeTab) {
                case SPECIFICATION:
                  return <TabSpecification data={specification}/>;
                case REVIEWS:
                  return <TabReviews reviews={reviews}/>;
                case CONTACTS:
                  return <TabContacts />;
                default:
                  return null;
              }
            }} />
        </div>
    </section>
  );
};

const mapStateToProps = (store) => ({
  specification: store.specification,
  reviews: store.reviews,
});

Information.propTypes = {
  specification: specificationProp,
  reviews: PropTypes.arrayOf(reviewProp),
};

export {Information};
export default connect(mapStateToProps)(Information);
