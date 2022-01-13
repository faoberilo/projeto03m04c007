import React from "react";
import axios from 'axios';
import { Container } from "./styles";

const Register = () => {

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    const name=evento.target.name.value;
    const nickname=evento.target.nickname.value;
    const email=evento.target.email.value;
    const birthdate=evento.target.birthdate.value;
    const imageUrl=evento.target.imageUrl.value;
    const password=evento.target.password.value;
    const passwordConfirmation=evento.target.passwordConfirmation.value;
 
    const user = {
        name,
        nickname,
        email,
        birthdate,
        imageUrl,
        password,
        passwordConfirmation      
    }
    axios.post('/user/register', user)
        .then((response)=>{
            alert('Usuário cadastrado com sucesso!!!');            
        }).catch((response)=>{
          alert('Dado já cadastrado no sistema. Por favor tente mudar algum campo');            
      });

    
  }
 
  return (
    <Container>
      <h2>Criar conta</h2>
      <form className='formRegister' onSubmit={handleSubmit}>
                <label>Nome:</label>
                <input type='text' id="name" name="name" placeholder='Nome' required/>
                <label>Nickname:</label>
                <input type='text' id="nickname" name="nickname" placeholder='Nickname' required/>
                <label>Email:</label>
                <input type='email' id="email" name="email" placeholder='Email' required/>
                <label>Data de Nascimento(dd/mm/aaaa):</label>
                <input type='text' id="birthdate" name="birthdate" placeholder='Data de Nascimento (dd/mm/aaaa)' required/>
                <label>Imagem de perfil:</label>
                <input type='text' id="imageUrl" name="imageUrl" placeholder='Link da imagem' required/>
                <label>Senha:</label>
                <input type='password' id="password" name="password" placeholder='Senha' required/>
                <label>Confirmação de senha:</label>
                <input type='password' id="passwordConfirmation" name="passwordConfirmation" placeholder='Repetir Senha' required/>
                <div> <input type='checkbox' id="termos" name="termos" required /> <label>Aceito os termos</label></div>
                <div> <input type='submit' value="Cadastrar" /></div>
            </form>

   
    </Container>
  );
};

export default Register;