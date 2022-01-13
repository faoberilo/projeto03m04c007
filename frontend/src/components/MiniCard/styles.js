import styled from 'styled-components';

export const Container = styled.div`
    
    background-color: rgba(192,192,192,0.2);
    display: flex;
    align-items: center;
    padding: 0.5rem;
    margin: 0.5rem;     
    border-radius: 1rem;
    justify-content: space-between;
    img{
        margin: 0 0.1rem;
        width: 5rem;
        border-radius: 5%;
        cursor: pointer;
    }
    p{
        color:black;    
        background-color: transparent;
        text-align:center;
        margin: 0 1rem;
        max-width: 30ch;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;      
    }
    
    h2{
        color:white;    
        background-color: transparent;
        font-style: bolder;
        margin: rem 1rem;
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
    
    
 

`