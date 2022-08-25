// Para fazermos login como administrador
import React from "react";
import { Botoes, Form, Input } from "../StyledApp";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/");
    };

    const alertLoginPage = () => {
        alert("Usuário não encontrado");
    };

    return (
        <div>
            <h1>Login</h1>

            <Form>
                <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="E-mail"
                    required
                />

                <Input
                    type="password"
                    name="senha"
                    id="senha"
                    placeholder="Senha"
                    required
                />
            </Form>

            <Botoes>
                <button onClick={goToHome}>Voltar</button>
                <button type="submit" onClick={alertLoginPage}>
                    Enviar
                </button>
            </Botoes>
        </div>
    );
}
