import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(192,192,192,0.1);
    margin-top: 1rem;
    padding: 1rem 0;
    position:relative;
    bottom:0;


    div{
        background-color: transparent;
    }
      a{
        text-decoration: none;
        color: rgb(192,192,192);
        font-size: 3rem;
        background-color:transparent;
    }
    span{
        color: rgb(192,192,192);
        background-color: transparent;
    }
`