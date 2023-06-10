import React, { useState, useEffect, Fragment } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { getAllData } from './components/redux/action';

import Login from './components/login/Login';
import Home from "./components/home/Home";

const App = () => {

  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllData());
  }, []);

  // console.log(products);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App