import React from "react";
import "./App.css";
import CardGrande from "./components/CardGrande/CardGrande";
import CardSobre from "./components/CardSobre/CardSobre";
import ImagemButton from "./components/ImagemButton/ImagemButton";
import InformacoesPerfil from "./components/InformacoesPerfil/InformacoesPerfil";

function App() {
    return (
        <div className="App">
            <div className="page-section-container">
                <InformacoesPerfil
                    imagem="https://github.com/matheusqueirozds.png"
                    nome="Matheus Queiroz"
                    profissao="Desenvolvedor Front-End | HTML | CSS | JavaScript | Git | GitHub"
                    fala="Fala sobre #frontend, #tecnologia, #programacao e #desenvolvimentoweb"
                    cidade="Salvador, Bahia, Brasil"
                    contato="Informações de contato"
                    seguidores="1.327 seguidores"
                    conexoes="+ de 500 conexões"
                />
            </div>

            <div className="page-section-container">
                <CardSobre
                    titulo="Sobre"
                    paragrafo1="Atualmente estudo Desenvolvimento Web Full Stack na Labenu (no período noturno, com aulas ao vivo) e Programação voltada ao Front-end, na Origamid (no tempo livre, por conta própria)."
                    paragrafo2="Gosto de desenvolver boas experiências e solucionar problemas (de formas criativas, se possível) e como se"
                    mais="...ver mais"
                />
            </div>

            <div className="page-section-container">
                <CardGrande
                    titulo="Experiência"
                    imagem="https://github.com/labenu.png"
                    nome="Labenu"
                    descricao="Formando desenvolvedores para o mercado de trabalho!"
                />

                <CardGrande
                    imagem="https://logodownload.org/wp-content/uploads/2019/03/nasa-logo-0-768x768.png"
                    nome="NASA"
                    descricao="Apontando defeitos."
                />
            </div>

            <div className="page-section-container">
                <h2>Minhas redes sociais</h2>
                <ImagemButton
                    imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
                    texto="Facebook"
                />

                <ImagemButton
                    imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
                    texto="Twitter"
                />
            </div>
        </div>
    );
}

export default App;
