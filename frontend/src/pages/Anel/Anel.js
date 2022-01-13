import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import  Card  from '../../components/Card/Card.js';
import axios from 'axios';

const Anel = () => {
  const [products,setProducts] = useState([]);

  const getMany = async ()=>{
    await axios.get('/product/findMany')
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
        products.filter(product=>product.type.toUpperCase()==="ANEL").map(product=>(
          <Card id={product.id} image={product.imageUrl} name={product.name} price={product.price}/>
          
        ))
      }
    </Container>
  );
};

export default Anel;