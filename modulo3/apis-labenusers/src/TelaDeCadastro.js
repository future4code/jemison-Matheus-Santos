import React from "react";

function TelaDeCadastro(props) {
    // Requisição CREATEUSERS
    const body = {
        name: props.input,
        email: props.input,
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Nome"
                value={props.input}
                onChange={props.handleInput}
            />
            <input
                type="email"
                placeholder="E-mail"
                value={props.input}
                onChange={props.handleInput}
            />
            <button>Criar Usuário</button>
        </div>
    );
}

export default TelaDeCadastro;
