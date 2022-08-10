// Para vermos todas as viagens
import React from "react";
import { Container, Title } from "../../components/global/StyledGlobal";
import { Button, Buttons } from "../../components/utilidades/StyledComponents";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function ListTripsPage() {
    const navigate = useNavigate();

    function goToHomePage() {
        navigate("/");
    }
    goToHomePage();

    function goToApplicationFormPage() {
        navigate("/trips/application");
    }
    goToApplicationFormPage();

    const BtnMarginBottom = styled(Buttons)`
        margin-bottom: 46px;
    `;

    return (
        <Container>
            <BtnMarginBottom>
                <Button onClick={goToHomePage}>Voltar</Button>
                <Button onClick={goToApplicationFormPage}>Inscrever-se</Button>
            </BtnMarginBottom>
            <Title>Lista de Viagens</Title>
        </Container>
    );
}

export default ListTripsPage;
