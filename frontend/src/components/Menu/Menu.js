import React from "react";
import { Container } from "./styles";

export default function Menu(props){
    return(
        <Container>
            <a href="/anel">Anéis</a>
            <a href="/brinco">Brincos</a>
            <a href="/corrente">Correntes</a>
            <a href="/pulseira">Pulseiras</a>
            <a href="/outro">Outros</a>
        </Container>
    )
}