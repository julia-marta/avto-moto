import React from 'react';
import ContactsItem from "../contacts-item/contacts-item";
import {YMaps, Map, Placemark} from 'react-yandex-maps';
import {Contact, MapParam, PlacemarkParam} from "../../const";

const TabContacts = () => {

    return (
      <div className="information__tab contacts">
        <ul className="contacts__list">
          {Object.keys(Contact).map((item, i) => (
            <ContactsItem key={i + 1} title={Contact[item].title} value={Contact[item].value} />
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
