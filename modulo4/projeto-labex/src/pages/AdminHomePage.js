// Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas

import React from "react";
import { Botoes } from "../StyledApp";
import { useNavigate } from "react-router-dom";
import Trips from "../hook/Trips";

export default function AdminHomePage() {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/");
    };

    const goToCreateTripPage = () => {
        navigate("/admin/trips/create");
    };

    const goToLoginPage = () => {
        navigate("/trips/login");
    };

    return (
        <div>
            <h1>Painel Administrativo</h1>

            <Botoes>
                <button onClick={goToHome}>Voltar</button>
                <button onClick={goToCreateTripPage}>Criar Viagem</button>
                <button onClick={goToLoginPage}>Logout</button>
            </Botoes>

            <Trips  />
        </div>
    );
}
