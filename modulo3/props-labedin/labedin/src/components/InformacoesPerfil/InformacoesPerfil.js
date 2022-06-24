import React from "react";
import "./InformacoesPerfil.css";

function InformacoesPerfil(props) {
    return (
        <div className="informacoes-container">
            <div className="informacoes-bg">
                <img src={props.imagem} />
            </div>

            <div className="container" id="informacoes-intro">
                <h1>{props.nome}</h1>
                <p>{props.profissao}</p>
                <p>{props.fala}</p>

                <div className="quebra">
                    <p>{props.cidade}</p>
                    <p>
                        <span>{props.contato}</span>
                    </p>
                </div>

                <div className="quebra">
                    <p>
                        <span>{props.seguidores}</span>
                    </p>
                    <p>
                        <span>{props.conexoes}</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default InformacoesPerfil;
