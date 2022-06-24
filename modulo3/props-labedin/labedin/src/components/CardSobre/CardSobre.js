import React from "react";
import "./CardSobre.css";

function CardSobre(props) {
    return (
        <div className="sobre-container container">
            <h2>{props.titulo}</h2>
            <div>
                <div>
                    <p className="margin-bottom-10">{props.paragrafo1}</p>
                    <p>{props.paragrafo2}</p>
                </div>
                <p id="mais">{props.mais}</p>
                
            </div>
        </div>
    );
}

export default CardSobre;
