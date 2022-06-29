import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";
import fotoUsuario1 from "./img/fotousuario1.webp";
import fotoUsuario2 from "./img/fotousuario2.webp";
import fotoUsuario3 from "./img/fotousuario3.webp";
import labenu from "./img/labenu.webp";
import geekhunter from "./img/geekhunter.webp";

const MainContainer = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    width: 100%;
`;
function App() {
    return (
        <MainContainer>
            <Post
                nomeUsuario1={"oabsorvedor"}
                fotoUsuario1={fotoUsuario1}
                fotoPost1={"https://picsum.photos/200/200"}
                nomeUsuario2={"labenu_"}
                fotoUsuario2={fotoUsuario2}
                fotoPost2={labenu}
                nomeUsuario3={"geekhunterbr"}
                fotoUsuario3={fotoUsuario3}
                fotoPost3={geekhunter}
            />
        </MainContainer>
    );
}

export default App;
