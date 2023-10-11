// src/components/MainPage.js

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Menu from './Menu';
import Login from './Login';

const MainPage = () => {
  return (
    <div className="main-container">
      <Menu />
      <div className="content-container">
        <Routes>
          <Route path="/" component={<Login/>} />
        </Routes>
      </div>
    </div>
  );
};

export default MainPage;
