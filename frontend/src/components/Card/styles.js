import styled from 'styled-components';

export const Container = styled.div`
    width: 20rem;
    background-color: rgba(192,192,192,0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    margin: 1rem;     
    border-radius: 5%;
    img{
        margin-bottom: 0.5rem;
        width: 10rem;
        border-radius: 5%;
        cursor: pointer;
    }
    h3{
        color:black;    
        background-color: transparent;
        text-align:center;
    }
    div{
        margin-top:0.3rem;
        width: 15rem;
        display: flex;
        justify-content: space-between;
        background-color: transparent;
        align-items: center;
    h2{
        color:black;    
        background-color: transparent;
        font-style: bolder;
    }
    button{
            background-color: rgb(192,192,192);
            font-weight:bolder;
            font-size: 1rem ;
            padding: 0.5rem 1rem;
            border:none;
            cursor: pointer;
            border-radius: 5rem;
        }
    }
    
 

`