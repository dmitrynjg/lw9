import React from 'react';
import 'react-router-dom';
import Header from '../components/header/Header';
import './Page.css';

function Profile(props) {
  return (
    <div className='wrap'>
      <Header/>
      <div className='content'>Profile</div>
    </div>
  );
}

export default Profile;
