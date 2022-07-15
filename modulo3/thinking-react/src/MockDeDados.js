import React from "react";
import "./MockDeDados.css";

function MockDeDados(props) {
    return (
        <div className="mock-bg">
            <img src={props.imagem} />
            <div className="mock-texto">
                <p>{props.nome}</p>
                <p>{props.preco}</p>
                <button className="botao">Adicionar ao carrinho</button>
            </div>
        </div>
    );
}

export default MockDeDados;
