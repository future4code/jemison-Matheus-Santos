// Para o administrador ver o detalhe de uma viagem específica, bem como os candidatos que aplicaram para ela
import React from "react";
import { useNavigate } from "react-router-dom";
import { Botoes } from "../StyledApp";
import TripDetail from "../hooks/TripDetail";

export default function TripDetailsPage(props) {
    const navigate = useNavigate();

    const goToLastPage = () => {
        navigate(-1);
    };

    return (
        <div>
            <TripDetail />

            <Botoes>
                <button onClick={goToLastPage}>Voltar</button>
            </Botoes>
        </div>
    );
}
