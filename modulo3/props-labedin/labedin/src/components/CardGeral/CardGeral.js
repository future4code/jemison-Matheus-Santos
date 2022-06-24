import React from "react";
import "./CardGeral.css";

function CardGeral(props) {
    return (
        <div className="experiencia-container container">
            <h2>{props.titulo}</h2>
            <div className="bigcard-container">
                <img src={props.imagem} />
                <div>
                    <h4>{props.subtitulo}</h4>
                    <p>{props.detalhe}</p>
                    <p>
                        <span>{props.periodo}</span>
                    </p>
                    <p>{props.descricao}</p>
                </div>
            </div>
        </div>
    );
}

export default CardGeral;
