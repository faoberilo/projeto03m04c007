import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import  MiniCard  from '../../components/MiniCard/MiniCard.js';
import axios from 'axios';

const Cart = () => {
  const [products,setProducts] = useState([]);

  const getMany = async ()=>{
    await axios.get('/user/seelist')
    .then(response =>{
      setProducts(response.data)
    })
  }
 

  useEffect(()=>{
    getMany()
  })
 
  return (
    <Container>
      
      {
        products.map(product=>(
          <MiniCard id={product.id} image={product.imageUrl} name={product.name} price={product.price}/>
        ))
      }
      
    </Container>
  );
};

export default Cart;