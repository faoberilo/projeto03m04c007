import React from "react";
import { Container } from "./styles";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const navigate=useNavigate();
    
  const [email,setEmail] = useState('');
  const [senha,setSenha] = useState('');

  const handleSubmit = event =>{
      event.preventDefault();

      const login = {
          email: email,
          password: senha
      }

      axios.post('auth/login',login)
      .then(response=>{
          const token = response.data.token;
          localStorage.setItem('token',token);
          alert('Usuário logado com sucesso!');
          navigate('/');
      }).catch(response=>{
        alert('Dados incorretos. Tente novamente');
        navigate('/login');
      })       
  }

  
 
  return (
    <Container>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
                <input type='email'  placeholder='Email' onChange={event=>setEmail(event.target.value)} required/>
                <input type='password' placeholder='Senha' onChange={event=>setSenha(event.target.value)} required/>
                <button type='submit' id="botao" value="Entrar">Entrar</button>
      </form>
            
    </Container>
  );
};

export default Login;