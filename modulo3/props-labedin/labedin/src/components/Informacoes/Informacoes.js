import React from "react";
import "../Cores/Cores.css";
import "./Informacoes.css";
import "../Tipografia/tipografia.css";

function Informacoes(props) {
    return (
        <div className="card-informacoes">
            <div className="flex1">
                <img src={props.foto} />
                <img className="bg-0" src={props.sino} />
            </div>
            <div className="grid">
                <div className="informacoes-basicas">
                    <h1 className="font-1-l-b">{props.nome}</h1>
                    <p className="font-1-m cor-6">{props.titulo}</p>
                    <p className="font-1-s cor-5">{props.tags}</p>
                    <div className="flex2">
                        <p className="font-1-s cor-5">{props.localizacao}</p>
                        <a className="font-1-s-b cor-8" href="#">
                            {props.contato}
                        </a>
                    </div>
                </div>
                <div className="instituicao">
                    <img src={props.logoEmpresa} />
                    <a className="font-1-s-b" href="#">
                        {props.empresa}
                    </a>
                </div>
            </div>
            <div className="numeros font-1-s-b">
                <p className="cor-5">{props.seguidores}</p>
                <a className="cor-8" href="#">
                    {props.conexoes}
                </a>
            </div>
        </div>
    );
}

export default Informacoes;
