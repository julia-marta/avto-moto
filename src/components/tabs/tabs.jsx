import React, {useState, useCallback} from 'react';
import {useMediaQuery} from 'react-responsive';
import PropTypes from 'prop-types';
import {Tab, TAB_OVERFLOWING_VIEWPORT} from '../../const';

const {SPECIFICATION, REVIEWS, CONTACTS} = Tab;

const Tabs = ({renderTab}) => {

  const isTabNavOverflowing = useMediaQuery({maxWidth: TAB_OVERFLOWING_VIEWPORT});

  const [activeTab, setActiveTab] = useState(SPECIFICATION);
  const [tabPosition, setTabPosition] = useState({left: 0})

  const handleTabClick = useCallback(
      (evt) => {
        evt.preventDefault();
        setActiveTab(evt.target.textContent);

        if (isTabNavOverflowing) {
          switch (evt.target.textContent) {
            case REVIEWS:
              setTabPosition({left: `50%`,  transform: `translate(-50%, 0)`});
              break;
            case CONTACTS:
              setTabPosition({right: 0})
              break;
            default:
              setTabPosition({left: 0})
          }
        }
      }, [isTabNavOverflowing]
  );

  return (
    <>
      <div className="information__nav">
        <ul className="information__nav-list" style={tabPosition}>
          {Object.keys(Tab).map((tab, i) => (
            <li key={i + 1} className="information__nav-item">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#" className={`information__nav-link ${Tab[tab] === activeTab ? `information__nav-link--active` : ``}`}
              onClick={handleTabClick}>{Tab[tab]}</a>
            </li>
          ))}
        </ul>
      </div>
      {renderTab(activeTab)}
    </>
  );
};

Tabs.propTypes = {
  renderTab: PropTypes.func.isRequired,
};

export default Tabs;
