import React from 'react';
import { Container } from './styles';
import logo from '../../img/logo.png';
import {BiUserPlus, BiLogInCircle, BiCart, BiUser} from "react-icons/bi";
import Search from '../../components/Search/Search';


export default function NavBar(){
    return(
        <Container>
            <a href='/'><img src={logo} alt="logo da empresa"/></a>
            <Search/>
            <ul>
                <a href='/register'><BiUserPlus/>Crie sua conta</a>
                <a href='/login'><BiLogInCircle/>Entre</a>
                <a href='/profile'><BiUser/>Minha Página</a>
                <a href='/cart'><BiCart/>Carrinho</a>
            </ul>      
           
        </Container>
    )

};