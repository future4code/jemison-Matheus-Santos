// Para fazermos login como administrador
import React from "react";
import { Container, Title } from "../../components/global/StyledGlobal";
import {
    Button,
    AlternateButton,
    Buttons,
} from "../../components/utilidades/StyledComponents";
import { Input } from "../../components/utilidades/StyledForms";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const navigate = useNavigate();

    function goToHomePage() {
        navigate("/");
    }
    goToHomePage();

    function goToAdminHomePage() {
        navigate("/admin/trips/list");
    }
    goToAdminHomePage();

   

    return (
        <Container>
            <Title>Login</Title>
            <Input
                type="email"
                name="email"
                id="email"
                placeholder="E-mail"
                required
            />
            <Input
                type="password"
                name="password"
                id="password"
                placeholder="Senha"
                required
            />

            <Buttons>
                <Button onClick={goToHomePage}>Voltar</Button>
                <Button onClick={(goToAdminHomePage)} type='submit'>Entrar</Button>
            </Buttons>
        </Container>
    );
}

export default LoginPage;
