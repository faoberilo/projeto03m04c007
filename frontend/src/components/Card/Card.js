import React from "react";
import { Container } from "./styles";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
    

export default function Card (props){

    const navigate = useNavigate();

  const seeProduct = () =>{
    navigate(`/product/find/${props.id}`, {state: props.id})
  }

  const buy = async (evento) => {
    evento.preventDefault();
    
    axios.patch(`user/addList/${props.id}`)
        .then((response)=>{
            alert('Produto adicionado ao carrinho com sucesso com sucesso!!!');
        });
  }
    return(
        <Container >
        
        <img src={props.image} alt="imagem do produto" onClick={seeProduct}/>
        <h3> {props.name}</h3>
        <div><h2>{'R$ ' + props.price}</h2> <button onClick={buy}>Comprar</button></div>
               
        </Container>

    )
};