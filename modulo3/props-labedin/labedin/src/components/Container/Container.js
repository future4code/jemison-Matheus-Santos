import React from "react";
import "./Container.css";
import "../Tipografia/tipografia.css";

function Container(props) {
    return (
        <div className="bigcard-container">
            <div className="card-1">
                <img src={props.imagem} />
                <div>
                    <h4 className="font-1-m-b">{props.nomeEmpresa}</h4>
                    <p className="font-1-s cor-5">{props.periodoTotal}</p>
                </div>
            </div>

            <div className="card-2">
                <p>{props.cargo}</p>
                <p className="font-1-s cor-5">{props.periodoCargo}</p>
            </div>
        </div>
    );
}

export default Container;
