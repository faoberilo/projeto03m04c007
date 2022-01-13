import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    h2 {
        color:rgb(192,192,192);
        text-align: center;
        padding-top: 2rem;
        margin-bottom: 1rem;
    }
  

    form{
        display: flex;
        flex-direction: column;
        background-color: rgba(192, 192, 192, 0.5);
        padding: 1rem;
        width: 50%;
        border-radius: 1rem;
        margin-bottom: 8.2rem;
        align-items: center;
        width: fit-content;
        input{
        color: black;
        font-size: 1rem;
        background-color: rgba(192, 192, 192, 0.5);
        padding: 1rem;
        margin-bottom: 1rem;
        border-radius: 1rem;
        width: 30rem;
        }
        button{
        color: black;
        font-size: 1rem;
        background-color: rgba(192, 192, 192, 0.5);
        padding: 1rem;
        border: none;
        border-radius: 1rem;
        width: fit-content;
        }
    }
   
    


 
    
   

     
        
           
  
   
    `