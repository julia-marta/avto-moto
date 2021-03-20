import React, {Fragment, useState, useCallback} from "react";
import PropTypes from "prop-types";
import {Tab} from "../../const";

const {SPECIFICATION} = Tab;

const Tabs = ({renderTab}) => {

  const [activeTab, setActiveTab] = useState(SPECIFICATION);

  const handleTabClick = useCallback(
      (evt) => {
        evt.preventDefault();
        setActiveTab(evt.target.textContent);
      }, []
  );

  return (
    <Fragment>
        <ul className="information__nav-list">
          {Object.keys(Tab).map((tab, i) => (
            <li key={i + 1} className="information__nav-item">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#" className={`information__nav-link ${Tab[tab] === activeTab ? `information__nav-link--active` : ``}`}
              onClick={handleTabClick}>{Tab[tab]}</a>
            </li>
          ))}
        </ul>

      {renderTab(activeTab)}
    </Fragment>
  );
};


Tabs.propTypes = {
  renderTab: PropTypes.func.isRequired,
};

export default Tabs;
