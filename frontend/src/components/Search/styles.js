import styled from "styled-components";

export const Container = styled.div`

    form{
        display: flex;
        align-items: center;
        color: white;
        text-align: center;
        input{
            color: rgb(192,192,192);
            font-size: 1.2rem;
            outline: 0;
            border-width: 0 0 0.1rem;
            border-color: rgb(192,192,192);
            padding-left: 1rem;
            
        }
        input::placeholder {
        color: rgb(192,192,192);
        }
        button{
            font-size:1.2rem;
            color: rgb(192,192,192);
            border:none;
            background-color: transparent;
            align-items: center;
            cursor: pointer;
        }
    }  
    
`