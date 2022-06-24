import React from "react";
import "./App.css";
import CardGeral from "./components/CardGeral/CardGeral";
import CardSobre from "./components/CardSobre/CardSobre";
import CardContato from "./components/CardContato/CardContato";
import InformacoesPerfil from "./components/InformacoesPerfil/InformacoesPerfil";

function App() {
    return (
        <div className="App">
            <div className="page-section-container">
                <InformacoesPerfil
                    imagem="https://github.com/matheusqueirozds.png"
                    nome="Matheus Queiroz"
                    profissao="Senior Developer React | React Native at CI&T"
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
                <CardGeral
                    titulo="Experiência"
                    imagem="https://media-exp1.licdn.com/dms/image/C4D0BAQFVKOiX8a8_eg/company-logo_200_200/0/1655319222653?e=1664409600&v=beta&t=9Eq-wR8QK1t7rxO8S2b4Hy_a7PTNrPXzbaTrZKTkdTg"
                    subtitulo="Junior Developer I React | React Native"
                    detalhe="CI&T · Tempo integral"
                    periodo="abr de 2023 - o momento · 1 ano"
                    descricao="Desenvolvimento de aplicações React e React Native com TypeScript."
                />
            </div>

            <div className="page-section-container">
                <CardGeral
                    titulo="Formação acadêmica"
                    imagem="https://media-exp1.licdn.com/dms/image/C4E0BAQHN68osUoFKGA/company-logo_100_100/0/1625764040369?e=1664409600&v=beta&t=qnWjAtOp0LcQtKoHwdODVVg5qcKN-Qr3LX5EmwgNaBg"
                    subtitulo="Labenu"
                    detalhe="Desenvolvimento Web Full Stack, Tecnologia"
                    periodo="mar de 2022 - abr de 2023"
                    descricao="Nota: Mais de 1000 horas de conteúdo, com aulas ministradas ao vivo e online."
                />
            </div>

            <div className="page-section-container">
                <CardContato
                    titulo="Informações de contato"
                    imagem1="https://icon-library.com/images/linkedin-icon-download/linkedin-icon-download-11.jpg"
                    subtitulo1="Seu perfil"
                    descricao11="linkedin.com/in/matheusqueirozds"
                    imagem2="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/link.png"
                    subtitulo2="Sites"
                    descricao21="github.com/matheusqueirozds (Outro)"
                    descricao22="matheusqueirozds.vercel.app/ (Portfólio)"
                    imagem3="https://media.istockphoto.com/vectors/illustration-icon-of-telephone-handset-inquiry-vector-id1325735146?b=1&k=20&m=1325735146&s=170667a&w=0&h=zp55hEyuMmSP4xqC7rXjx8Zco8VzLtjcHONM4BNSvcs="
                    subtitulo3="Telefone"
                    descricao31="(71) 981031081 (Comercial)"
                    imagem4="https://www.shareicon.net/download/2016/11/14/852073_map.ico"
                    subtitulo4="Endereço"
                    descricao41="Salvador, Bahia"
                    imagem5="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/mail.png"
                    subtitulo5="E-mail"
                    descricao51="matheusqueirozds@gmail.com"
                    imagem6="https://icons-for-free.com/download-icon-cake-1321215613168069161_512.png"
                    subtitulo6="Aniversário"
                    descricao61="28 de dezembro"
                />
            </div>
        </div>
    );
}

export default App;
