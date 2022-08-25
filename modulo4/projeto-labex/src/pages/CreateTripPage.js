// Formulário para o administrador criar uma nova viagem
import React from "react";
import { Botoes, Form, Select, Input } from "../StyledApp";
import { useNavigate } from "react-router-dom";

export default function CreateTripPage() {
    const navigate = useNavigate();

    const goToAdminHomePage = () => {
        navigate("/admin/trips/list");
    };

    return (
        <div>
            <Form>
                <Input
                    type="text"
                    name="nome"
                    id="nome"
                    placeholder="Nome"
                    title="O nome da viagem deve ter no mínimo 5 caracteres"
                    pattern="^.{5,}$"
                    required
                />

                <Select>
                    <option value disabled selected>
                        Escolha um Planeta
                    </option>
                    <option>Mercúrio</option>
                    <option>Vênus</option>
                    <option>Terra</option>
                    <option>Marte</option>
                    <option>Júpiter</option>
                    <option>Saturno</option>
                    <option>Urano</option>
                    <option>Netuno</option>
                    <option>Plutão</option>
                </Select>

                <Input
                    type="date"
                    name="data"
                    id="data"
                    placeholder="dd/mm/aaaa"
                    min="2022-08-25"
                    required
                />

                <Input
                    type="text"
                    name="descricao"
                    id="descricao"
                    placeholder="Descrição"
                    pattern="^.{30,}$"
                    title="O nome deve ter no mínimo 30 caracteres"
                    required
                />

                <Input
                    type="number"
                    name="duracaoEmDias"
                    id="duracaoEmDias"
                    placeholder="Duração em dias"
                    title="O valor deve ser maior ou igual a 50"
                    pattern="50"
                    required
                />
            </Form>

            <Botoes>
                <button onClick={goToAdminHomePage}>Voltar</button>
                <button>Criar</button>
            </Botoes>
        </div>
    );
}
