import React from "react";
import "./CardGrande.css";

function CardGrande(props) {
    return (
        <div className="card-container container">
            <h2>{props.titulo}</h2>
            <div className="bigcard-container">
                <img src={props.imagem} />
                <div>
                    <h4>{props.nome}</h4>
                    <p>{props.descricao}</p>
                </div>
            </div>
        </div>
    );
}

export default CardGrande;
