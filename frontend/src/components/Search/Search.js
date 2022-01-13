import React from "react";
import { Container } from "./styles";
import { FaSearch } from 'react-icons/fa';


export default function Search(){
   
    return(
        <Container>
            <form >
                <input type='text' placeholder="O que você procura? " ></input>
                <button> <FaSearch/> </button>
            </form>
        </Container>
    )
}