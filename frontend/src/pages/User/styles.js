import styled from 'styled-components';

export const Container = styled.div`
    background-color: transparent;
    display: flex;
    justify-content: space-evenly;
    padding: 2rem;
    align-items: center;
    margin-bottom: 3.8rem;
    
    img{
        width:20rem;
        border-radius: 1rem;

    }

    .detalhes{
        background-color: rgba(192,192,192,0.5);
        padding: 1rem;
        width: 50rem;
        height: fit-content;
        text-align: center;
        border-radius: 1rem;
        color:black;
        text-align: left;
        h2{
            text-align: center;
            background-color: transparent;
        }
        h3{
            margin: 1rem;
            b{
                color:white;
                background-color: transparent;
                
            }
            background-color: transparent;
        }
        div{
            display: flex;
            justify-content: center;
            background-color: transparent;
        }
        button{
            text-align: center;
            background-color: rgba(192,192,192,0.5);
            font-weight:bolder;
            font-size: 1rem ;
            padding: 0.5rem 1rem;
            cursor: pointer;
            border-radius: 5rem;
            border-color: black;
            border-style: solid;
        }
        
            
    }
    
`