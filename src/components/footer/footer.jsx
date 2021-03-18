import React from 'react';
import Menu from '../menu/menu';
import {FOOTER_MENU_ITEMS} from '../../const';

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer__wrapper container">
        <Menu type={`footer`} items={FOOTER_MENU_ITEMS} />
      </div>
    </footer>
  );
};

export default Footer;