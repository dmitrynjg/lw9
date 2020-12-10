import React from 'react';
import 'react-router-dom';
import Header from '../components/header/Header';
import './Page.css';

function Dashboard(props) {
  return (
    <div className='wrap'>
      <Header />
      <div className='wrap-content'>Dashboard</div>
    </div>
  );
}

export default Dashboard;
