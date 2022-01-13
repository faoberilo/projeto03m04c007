import React from 'react';
import { Container } from './styles';
import {FaInstagramSquare,FaWhatsappSquare} from "react-icons/fa";


export default function Footer(){
    return(
        <Container>
            <div>
                <a href="https://www.instagram.com/eloizapratas/"><FaInstagramSquare/></a>
                <a href="https://wa.me/+5533999233352"><FaWhatsappSquare/></a>        
            </div>

            <span>Desenvolvido por @faoberilo</span>
        </Container>
    )
};