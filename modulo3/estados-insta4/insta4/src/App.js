import React from "react";
import styled from "styled-components";

import Header from "./components/Header/Header";
import Post from "./components/Post/Post";

import "./App.css";

import post1 from "./img/labenu_post.jpg";
import logo1 from "./img/labenu_logo.jpg";
import post2 from "./img/nina-talks_post.jpg";
import logo2 from "./img/nina-talks_logo.jpg";
import post3 from "./img/afrotrampos_post.jpg";
import logo3 from "./img/afrotrampos_logo.jpg";

const MainContainer = styled.div`
    background-color: #fafafa;
    height: 1000px;
    max-width: 414px;
    margin: 0 auto;
    overflow-y: scroll;
`;

function App() {
    return (
        <MainContainer>
            <Header />
            <Post
                nomeUsuario={"labenu_"}
                fotoUsuario={logo1}
                fotoPost={post1}
            />
            <Post
                nomeUsuario={"nina_talks"}
                fotoUsuario={logo2}
                fotoPost={post2}
            />
            <Post
                nomeUsuario={"afrotrampos"}
                fotoUsuario={logo3}
                fotoPost={post3}
            />
        </MainContainer>
    );
}

export default App;
