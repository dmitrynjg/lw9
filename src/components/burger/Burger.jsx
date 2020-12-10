import { view } from '@risingstack/react-easy-state';
import React from 'react';
import 'react-router-dom';
import './Burger.css';
import PropTypes from 'prop-types';

function Burger(props) {
  return (
    <div className="burger-btn" onClick={props.openMenu}>
      <span />
      <span />
      <span />
    </div>
  );
}
Burger.propTypes = {
  openMenu: PropTypes.func.isRequired,
};
export default view(Burger);
