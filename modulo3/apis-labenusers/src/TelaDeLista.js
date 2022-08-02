import axios from "axios";
import React, { useEffect, useState } from "react";
import { Display, Lista, ItemLista, IconeLista, FormPlay } from "./styled";
import "boxicons"

function TelaDeLista() {
    // Estados
    const [usuarios, setUsuarios] = useState([]);

    const [input, setInput] = useState("");

    const handleInput = (e) => {
        setInput(e.target.value);
    };

    // Componentização da lista
    const todosUsuarios = usuarios.map((usuario, index) => {
        return (
            <ItemLista key={index}>
                {usuario.name}

                <IconeLista>
                    <box-icon name="x" color="#ff0000"></box-icon>
                </IconeLista>
            </ItemLista>
        );
    });

    /* GET GETAllUSERS */
    // Variáveis da API
    const urlGetAllUsers =
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

    const serviceHeaders = {
        headers: {
            Authorization: "matheus-queiroz-jemison",
        },
    };

    // Requisição
    const mostrarTodosUsuarios = () => {
        axios
            .get(urlGetAllUsers, serviceHeaders)
            .then((response) => setUsuarios(response.data))
            .catch((error) => setUsuarios(error.response.data));
    };

    useEffect(() => {
        mostrarTodosUsuarios();
    }, []);

    // GETSEARCHUSERS
    // Variáveis da API
    const urlSearchUsers =
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=&email=";

    // Requisição

    /*  alert("Usuário criado com sucesso!");
S
    alert("Erro ao criar o usuário"); */

    return (
        <Display>
            <Lista>{todosUsuarios}</Lista>

            <FormPlay>
                <h4>Procurar usuário</h4>
                <input
                    type="text"
                    placeholder="Nome exato para busca"
                    value={input}
                    onChange={handleInput}
                />
                <button>Buscar</button>
            </FormPlay>
        </Display>
    );
}

export default TelaDeLista;
