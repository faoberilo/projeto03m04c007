import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

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
        border-radius: 5%;
    }

    label{
        margin-left: 0.7rem;
        background-color: transparent;
        font-size: 1rem;
        color: black;
        
    }
 
    input{
      
        background-color: rgba(192, 192, 192, 0.5);
        padding: 0.5rem;
        margin-bottom: 1rem;
        border-radius: 1rem;
    }

    div{
        display: flex;
        background-color: transparent;
        text-align: center;
        justify-content: center;
        input{
            font-size: 1rem ;
            padding:1rem;
            border:none;
            cursor: pointer;
        }
        
    }

    
        
    }
   
    `