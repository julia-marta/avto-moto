import React from 'react';
import Menu from '../menu/menu';
import {HEADER_MENU_ITEMS} from '../../const';

const Header = () => {

  return (
    <header className="header">
      <div className="header__wrapper container">
        <div className="header__logo">
          {/* eslint-disable-next-line */}
          <a href="#"><img src="img/logo.svg" width="134" height="55" alt="Логотип Авто Мото"/></a>
        </div>
        <nav className="header__navigation">
          <Menu type={`header`} items={HEADER_MENU_ITEMS} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
