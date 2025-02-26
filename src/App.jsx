import React from 'react';
import './App.css'
import Navbar from './componets/layouts/Navbar';
import Home from './componets/main/Home';
import { Route, Routes } from 'react-router';




const App = () => {
  return <>

    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}></Route>
    </Routes>

  </>
}

export default App;

