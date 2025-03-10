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
import '@fortawesome/fontawesome-free/css/all.min.css';
import Login from './componets/main/Login';





const App = () => {
  return <>

    <Navbar/>
    <Routes>
      <Route index element={<TrendingContextProvider><Home/></TrendingContextProvider>}></Route>
      <Route path='/recipes' element={<RecipyContextProvider><Rec/></RecipyContextProvider>}></Route>
      <Route path='/store' element={<RecipyContextProvider><Store/></RecipyContextProvider>}></Route>
      <Route path='/product/info/:productCode'element={<RecipyContextProvider><StoreInfo/></RecipyContextProvider>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
    <Footer/>

  </>
}

export default App;

