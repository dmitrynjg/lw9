import { view } from '@risingstack/react-easy-state';
import React from 'react';
import 'react-router-dom';
import './Close.css';
import PropTypes from 'prop-types';

function Close(props) {
  return (
    <div className="burger-btn" onClick={props.closeMenu}>
      <span />
      <span />
      <span />
    </div>
  );
}
Close.propTypes = {
  closeMenu: PropTypes.func.isRequired,
};
export default view(Close);
