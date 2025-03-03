import React from 'react';
import './App.css'
import Navbar from './componets/layouts/Navbar';
import Home from './componets/main/Home';
import { Route, Routes } from 'react-router';
import { TrendingContextProvider } from './context/TrendingContext';
import {RecipyContextProvider} from './context/RecipyContext'
import Footer from './componets/layouts/Footer';
import Rec from './componets/main/Rec';
import Store from './componets/main/Store';
import StoreInfo from './componets/main/StoreInfo';





const App = () => {
  return <>

    <Navbar/>
    <Routes>
      <Route index element={<TrendingContextProvider><Home/></TrendingContextProvider>}></Route>
      <Route path='/recipes' element={<RecipyContextProvider><Rec/></RecipyContextProvider>}></Route>
      <Route path='/store' element={<RecipyContextProvider><Store/></RecipyContextProvider>}></Route>
      <Route path='/store-info:product_code' element={<RecipyContextProvider><StoreInfo/></RecipyContextProvider>}></Route>

    </Routes>
    <Footer/>

  </>
}

export default App;

