// Para o usuário se candidatar à viagens, página que vai ter o formulário de inscrição
import React from "react";
import { Botoes, Form, Select, Input } from "../StyledApp";
import { useNavigate } from "react-router-dom";

export default function ApplicationFormPage() {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/");
    };

    return (
        <div>
            <h1>Inscreva-se para uma viagem</h1>

            <Form>
                <Select>
                    <option value disabled selected>
                        Escolha uma Viagem
                    </option>
                    <option>Surfando nos Anéis de saturno</option>
                    <option>Explorando Júpiter</option>
                </Select>

                <Input
                    type="text"
                    name="nome"
                    id="nome"
                    placeholder="Nome"
                    title="O nome deve ter no mínimo 3 caracteres"
                    required
                />

                <Input
                    type="number"
                    name="idade"
                    id="idade"
                    placeholder="Idade"
                    min={18}
                    required
                />

                <Input
                    type="text"
                    name="applicationText"
                    id="applicationText"
                    placeholder="Texto de Candidatura"
                    pattern="^.{30,}$"
                    title="O texto deve ter no mínimo 30 caracteres"
                    required
                />

                <Input
                    type="text"
                    name="profissao"
                    id="profissao"
                    placeholder="Profissão"
                    pattern="^.{10,}$"
                    title="A profissão deve ter no mínimo 10 caracteres"
                    required
                />

                <Select placeholder="país" required>
                    <option value disabled selected>
                        Escolha um País
                    </option>
                </Select>
            </Form>

            <Botoes>
                <button onClick={goToHome}>Voltar</button>
                <button type="submit">Enviar</button>
            </Botoes>
        </div>
    );
}
