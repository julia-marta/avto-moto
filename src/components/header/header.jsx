import React, {useState, useCallback, useEffect} from 'react';
import {useMediaQuery} from 'react-responsive';
import Menu from '../menu/menu';
import {HEADER_MENU_ITEMS, TABLET_VIEWPORT} from '../../const';

const Header = () => {

  const isCompactMenu = useMediaQuery({maxWidth: TABLET_VIEWPORT});

  const [isMenuOpened, setMenuOpened] = useState(true);

  useEffect(() => {
    if (isCompactMenu) {
      setMenuOpened(false);
    }
  }, [isCompactMenu]);

  useEffect(() => {
    if (isMenuOpened) {
      document.body.style.overflow = `hidden`;
    } else {
      document.body.style.overflow = `auto`;
    }
  });

  const handleToggleClick = useCallback(
    (evt) => {
      evt.preventDefault();
      setMenuOpened(!isMenuOpened);
    }, [isMenuOpened]
  );

  return (
    <header className="header">
      <div className="header__wrapper container">
        <div className="header__top">
          <div className="header__logo">
            {/* eslint-disable-next-line */}
            <a href="#"><img src="img/logo.svg" width="134" height="55" alt="Логотип Авто Мото"/></a>
          </div>
          {isCompactMenu && <button className={`header__toggle ${isMenuOpened ? `header__toggle--close` : `header__toggle--hamburger`}`} type="button" aria-label="Открыть меню" onClick={handleToggleClick}></button>}
        </div>

        <nav className={`header__navigation ${isCompactMenu && !isMenuOpened ? `header__navigation--closed` : ``}`}>
          <Menu type={`header`} items={HEADER_MENU_ITEMS} />
        </nav>

      </div>
    </header>
  );
};

export default Header;
