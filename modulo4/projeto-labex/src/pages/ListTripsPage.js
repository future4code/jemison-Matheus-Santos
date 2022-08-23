// Para vermos todas as viagens
import React from "react";
import { Botoes, Container } from "../StyledApp";
import { useNavigate } from "react-router-dom";

export default function ListTripsPage() {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/");
    };

    const goToApplication = () => {
        navigate("/trips/application");
    };

    return (
        <Container>
            <Botoes>
                <button onClick={goToHome}>Voltar</button>
                <button onClick={goToApplication}>Inscrever-se</button>
            </Botoes>

            <h1>Lista de Viagens</h1>
        </Container>
    );
}
