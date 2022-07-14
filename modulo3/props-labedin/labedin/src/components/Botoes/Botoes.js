import React from "react";
import "../Botoes/Botoes.css";
import "../Cores/Cores.css";
import "../Tipografia/tipografia.css";

function Botoes(props) {
    return (
        <div className="botoes">
            <button className="botao botao-azul font-1-m-b">
                {props.texto1}
            </button>
            <button className="botao font-1-m-b">{props.texto2}</button>
        </div>
    );
}

export default Botoes;
