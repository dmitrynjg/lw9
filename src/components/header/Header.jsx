import { view } from '@risingstack/react-easy-state';
import React from 'react';
import { Link } from 'react-router-dom';

import toggleMenu from '../../actions/Drawer';
import storeApp from '../../store';
import Burger from '../burger/Burger';
import Close from '../close/Close';
import Drawer from '../drawer/Drawer';

import './Header.css';

function Header() {
  return (
    <div className="wrap-header">
      <Burger openMenu={toggleMenu} />
      <Drawer
        isOpened={storeApp.isDrawerOpen}
        closeElement={<Close closeMenu={toggleMenu} />}
        content={(
          <ul className="list-link">
            <li key={1}>
              <Link to="/dashboard">Дашборд</Link>
            </li>
            <li key={2}>
              <Link to="/settings">Настройки</Link>
            </li>
            <li key={2}>
              <Link to="/profile">Профиль</Link>
            </li>
          </ul>
        )}
      />
    </div>
  );
}

export default view(Header);
