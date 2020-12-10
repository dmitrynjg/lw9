import React, { useEffect } from 'react';
import 'react-router-dom';
import storeApp from '../../store';
import './Drawer.css';
import { view } from '@risingstack/react-easy-state';

import PropTypes from 'prop-types';

function Drawer(props) {
  useEffect(() => {
    storeApp.isDrawerOpen = false;
  }, []);
  return (
    <div className={props.isOpened ? 'drawer drawer-open' : 'drawer'}>
      {props.element}
      {props.content}
    </div>
  );
}

Drawer.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  closeElement: PropTypes.element.isRequired,
  listLink: PropTypes.array.isRequired,
};
export default view(Drawer);
