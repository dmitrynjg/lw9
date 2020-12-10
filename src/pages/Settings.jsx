import React from 'react';
import 'react-router-dom';
import Header from '../components/header/Header';
import './Page.css';

function Settings(props) {
  return (
    <div className='wrap'>
      <Header/>
      <div className='wrap-content'>Settings</div>
    </div>
  );
}

export default Settings;
