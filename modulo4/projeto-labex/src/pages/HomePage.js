// Para o usuário escolher entre Área Administrativa e Lista de Viagens
import React from "react";
import { Botoes } from "../StyledApp";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate();

    const goToListTripsPage = () => {
        navigate("/trips/list");
    };

    const goToLoginPage = () => {
        navigate("/trips/login");
    };

   

    return (
        <div>
            <h1>LabeX</h1>

            <Botoes>
                <button onClick={goToListTripsPage}>Ver viagens</button>
                <button onClick={goToLoginPage}>Área de admin</button>
            </Botoes>
        </div>
    );
}
