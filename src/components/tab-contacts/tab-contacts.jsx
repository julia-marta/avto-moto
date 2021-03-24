import React from 'react';
import {YMaps, Map, Placemark} from 'react-yandex-maps';
import {addLineBreak} from "../../utils";
import {Contact, MapParam, PlacemarkParam} from "../../const";

const TabContacts = () => {

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
            <Map defaultState={{ center: [MapParam.LATITUDE, MapParam.LONGITUDE], zoom: MapParam.ZOOM }}
            width={MapParam.WIDTH} height={MapParam.HEIGHT} >
              <Placemark geometry={[PlacemarkParam.LATITUDE, PlacemarkParam.LONGITUDE]} options={{
              iconLayout: `default#image`,
              iconImageHref: PlacemarkParam.IMAGE,
              iconImageSize: [PlacemarkParam.WIDTH, PlacemarkParam.HEIGHT],
              iconImageOffset: [-3, -40]
            }} />
            </Map>
          </div>
        </YMaps>
      </div>
    )
}

export default TabContacts;
