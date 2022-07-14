import React from "react";
import "./Sobre.css";

function Sobre(props) {
    return (
        <div className="sobre-card font-1-s cor-6">
            <p>{props.paragrafo1}</p>
            <div className="flex-2">
                <p>{props.paragrafo2}</p>
                <p className="mais cor-5">{props.verMais}</p>
            </div>
        </div>
    );
}

export default Sobre;
