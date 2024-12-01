import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Detail from './Pages/Detail';
import Dashboard from './Pages/Dashboard';
import Header from './Components/Header';
import Cart from './Components/Products/Cart';
import AboutUs from './Components/About';
import Contact from './Components/Contact/Contact';
import Footer from './Footer/Footer';
import Checkout from './Components/Products/Checkout';
import Account from './Profile/Account';
import Faqs from './Footer/Faqs';
import EnvironmentalInitiatives from './Footer/EnvironmentalInitiatives';
import Privacy from './Footer/Privacy policy/Privacy';
import ReturnAndExchange from './Footer/ReturnAndExchange';
import Login from './Profile/Login';
import TopBar from './Header/TopBar';
import OrderConfirmation from './Pages/ConfirmationOrder';


function App() {
  return (
    <>
    <TopBar/>
        <Header/>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/product/:id" element={<Detail />} />
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/account' element={<Account/>}/>
          <Route path='/faqs' element={<Faqs/>}/>
          <Route path='/environmental' element={<EnvironmentalInitiatives/>}/>
          <Route path='/privacy' element={<Privacy/>}/>
          <Route path='/return' element={<ReturnAndExchange/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/order' element={<OrderConfirmation/>}/>
        </Routes>
        <div className='mb-0 mt-12'>
          <Footer/>
          </div>
      
        </>
  );
}

export default App;
