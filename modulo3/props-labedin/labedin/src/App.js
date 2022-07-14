import React from "react";
import sino from "./img/sino.svg";
import logoEmpresa from "./img/logoEmpresa.png";
import "./App.css";
import Botoes from "./components/Botoes/Botoes";
import Container from "./components/Container/Container";
import Informacoes from "./components/Informacoes/Informacoes";
import Sobre from "./components/Container/Sobre/Sobre";

function App() {
    return (
        <div className="app-bg">
            <div className="secao">
                <Informacoes
                    foto="https://media-exp1.licdn.com/dms/image/C4E03AQGNUrOu4_FRxg/profile-displayphoto-shrink_400_400/0/1652967944863?e=1663200000&v=beta&t=C4CMpC1s83FWVGMBmDnAIlwY6dxAmi9e8ilrfVHoqW4"
                    sino={sino}
                    nome="Matheus Queiroz"
                    titulo="Desenvolvedor Frontend | HTML | CSS | JavaScript"
                    tags="Fala sobre #frontend, #tecnologia, #programacao e #desenvolvimentoweb"
                    localizacao="Salvador, Bahia, Brasil"
                    logoEmpresa={logoEmpresa}
                    empresa="Labenu"
                    contato="Informações de contato"
                    seguidores="9.999 seguidores"
                    conexoes="+ de 500 conexões"
                />

                <Botoes texto1="Enviar mensagem" texto2="Mais" />
            </div>

            <div className="secao">
                <h2>Sobre</h2>
                <Sobre
                    paragrafo1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi doloribus aperiam delectus magni, accusamus excepturi ea vitae ratione facere nulla neque rerum, veritatis cumque tempore, dolorem ullam pariatur nostrum iste."
                    paragrafo2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi doloribus aperiam delectus magni."
                    verMais="...ver mais"
                />
            </div>

            <div className="secao">
                <h2>Experiência</h2>
                <Container
                    imagem="https://media-exp1.licdn.com/dms/image/C4E0BAQHBCNmS9sbJsA/company-logo_100_100/0/1620234398789?e=1665619200&v=beta&t=36UqDXIE1KNzaWoM-TsdQlS9WwbC798cvLQTyvRv8Dg"
                    nomeEmpresa="Montink"
                    periodoTotal="Tempo integral · 1 a 9 m"
                    cargo="Analista de CS II"
                    periodoCargo="jul de 2021 - o momento · 1 ano 1 mês"
                />

                <Container
                    imagem="https://media-exp1.licdn.com/dms/image/C4D0BAQG9RwUc9gdQCw/company-logo_100_100/0/1656681447947?e=1665619200&v=beta&t=FoQI3ugc1mt6klEoj6kzll6QZqAFlau_mmZT317arC0"
                    nomeEmpresa="Atento Brasil"
                    periodoTotal="Tempo integral · 2 a 1 m"
                    cargo="Analista de Relacionamento Digital ll (Mídias Sociais Credicard)"
                    periodoCargo="jan de 2021 · 1 ano"
                />
            </div>
        </div>
    );
}

export default App;
