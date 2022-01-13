import React from "react";
import { Container } from "./styles";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
    

export default function MiniCard (props){

    const navigate = useNavigate();

  const seeProduct = () =>{
    navigate(`/product/find/${props.id}`, {state: props.id})
  }

  const buy = async (evento) => {
    evento.preventDefault();
    
    axios.patch(`user/deleteList/${props.id}`)
        .then((response)=>{
            alert('Produto removido ao carrinho com sucesso com sucesso!!!');
        });
  }
    return(
        <Container >
        
        <img src={props.image} alt="imagem do produto" onClick={seeProduct}/>
        <p> {props.name}</p>
        <h2>{'R$ ' + props.price}</h2> 
        <button onClick={buy}>Remover</button>
               
        </Container>

    )
};