import React from 'react';
import { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import axios from 'axios';
import { Container } from './styles';



export default function Product(props){
    
    const [product,setProduct] = useState([]);
    useEffect(()=>{
        seeProductById();
    }, []);

    const { id } = useParams();
    const codigo= id.substr(0, 8);

    const seeProductById = async () => {
        const request = await axios.get(`/product/find/${id}`);
        const product = request.data;
        setProduct(product);
      }
    
    
      const buy = async (evento) => {
        evento.preventDefault();
        
        axios.patch(`user/addList/${id}`)
            .then((response)=>{
                alert('Produto adicionado ao carrinho com sucesso com sucesso!!!');
            });
    
        
      }
    
    return(
        <Container>
            <div className='capa'>            
                <img src={product.imageUrl} alt="imagem do produto"/>
            </div>
            <div className='detalhes'>
                <h2>{product.name}</h2>
                <h3><b>Código do Produto: </b> {codigo}</h3>
                <h3><b>Categoria: </b> {product.type}</h3>
                <h3><b>Descrição: </b> {product.storyline}</h3>
                <h3><b>Preço: </b> R${product.price} </h3>
                <div className='botao' ><button  onClick={buy}>Comprar</button></div>
            </div>            
        </Container>
           
    )
}