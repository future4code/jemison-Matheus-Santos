// Para o usuário escolher entre Área Administrativa e Lista de Viagens

import React from "react";
import { Container, Title } from "../../components/global/StyledGlobal";
import { Button, Buttons } from "../../components/utilidades/StyledComponents";
import { useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();

    function goToListTripsPage() {
        navigate("/trips/list");
    }
    goToListTripsPage();

    function goToLoginPage() {
        navigate("/login");
    }
    goToLoginPage();

    return (
        <Container>
            <Title>LabeX</Title>

            <Buttons>
                <Button onClick={goToListTripsPage}>Ver Viagens</Button>
                <Button onClick={goToLoginPage}>Área Administrativa</Button>
            </Buttons>
        </Container>
    );
}

export default HomePage;
