import React, { Fragment } from 'react';
import {YMaps, Map, Placemark} from 'react-yandex-maps';
import {Contact} from "../../const";

const TabContacts = () => {

    const addLineBreak = (line, separator) => {
      return <Fragment>{separator}<br/>{line.split(separator)[1]}</Fragment>
    }

    return (
      <div className="information__tab contacts">
        <ul className="contacts__list">
          {Object.keys(Contact).map((item, i) => (
            <li key={i + 1} className="contacts__item">
              <p className="contacts__text contacts__text--title">{Contact[item].title}</p>
              <p className="contacts__text contacts__text--value">
                {item === `ADDRESS` ? addLineBreak(Contact[item].value, `Санкт-Петербург,`) : Contact[item].value}
              </p>
            </li>
          ))}
        </ul>
        <YMaps>
          <div className="contacts__map">
            <Map defaultState={{ center: [59.968, 30.320], zoom: 15 }} width={431} height={271} >
              <Placemark geometry={[59.968137, 30.316263]} options={{
              iconLayout: `default#image`,
              iconImageHref: `img/pin.svg`,
              iconImageSize: [32, 40],
              iconImageOffset: [-3, -40]
            }} />
            </Map>
          </div>
        </YMaps>
      </div>
    )
}

export default TabContacts;
