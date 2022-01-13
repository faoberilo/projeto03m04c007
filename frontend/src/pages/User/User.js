import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
import { Container } from './styles';



export default function User(props){

    const navigate=useNavigate();

    
    const [user,setUser] = useState({});

    useEffect(()=>{
        getUser();
    }, []);
    
    const getUser= async () => {
        await axios.get(`user/get`).then((response)=>{
            const user = response.data;
            setUser(user);
        }).catch((response)=>{
            navigate('/login');
        });       
    }

    const handleClick = event =>{
        event.preventDefault();
        localStorage.removeItem('token');
        alert('Usuário deslogado com sucesso!');
        navigate('/');
    }
    
    return(
        <Container>
            <div className='capa'>            
                <img src={user.imageUrl} alt="imagem do produto"/>
            </div>
            <div className='detalhes'>
                <h2>{user.name}</h2>
                <h3><b>Apelido: </b> {user.nickname}</h3>
                <h3><b>Email: </b> {user.email}</h3>
                <h3><b>Data de Nascimento: </b> {user.birthdate}</h3>
                <div><button className="botao"  onClick={handleClick}>Sair</button></div>     
            </div>
        </Container>
           
    )
}