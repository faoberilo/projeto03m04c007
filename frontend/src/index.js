import React from 'react';
import ReactDOM from 'react-dom';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import axios from 'axios';
import {GlobalStyle} from './styles/global';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Menu from './components/Menu/Menu'
import Home from './pages/Home/Home'
import Product from './pages/Product/Product';
import Cart from './pages/Cart/Cart';
import User from './pages/User/User';
import Anel from './pages/Anel/Anel';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Corrente from './pages/Corrente/Corrente';
import Pulseira from './pages/Pulseira/Pulseira';
import Outro from './pages/Outro/Outro';
import Brinco from './pages/Brinco/Brinco';



axios.defaults.baseURL = 'https://backprojeto03m04c007.herokuapp.com';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.interceptors.request.use(
  config=>{
      config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
      return config;
  }
);


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <Navbar/>
    <Menu/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/product/find/:id" element={<Product/>}/>
        <Route path="/profile" element={<User/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/anel" element={<Anel/>}/>
        <Route path="/corrente" element={<Corrente/>}/>
        <Route path="/pulseira" element={<Pulseira/>}/>
        <Route path="/outro" element={<Outro/>}/>
        <Route path="/brinco" element={<Brinco/>}/>





      </Routes>
    </BrowserRouter>
   <Footer/>  
  </React.StrictMode>,
  document.getElementById('root')
);

