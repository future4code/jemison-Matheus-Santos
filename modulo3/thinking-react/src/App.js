import React from "react";
import MockDeDados from "./MockDeDados";
import "./App.css";

function App() {
    return (
        <div className="container">
            <MockDeDados
                imagem="https://picsum.photos/200/200?a=1"
                nome="Produto 1"
                preco="R$ 149,90"
            />

            <MockDeDados
                imagem="https://picsum.photos/200/200?a=2"
                nome="Produto 2"
                preco="R$ 149,90"
            />

            <MockDeDados
                imagem="https://picsum.photos/200/200?a=3"
                nome="Produto 2"
                preco="R$ 149,90"
            />

            <MockDeDados
                imagem="https://picsum.photos/200/200?a=4"
                nome="Produto 4"
                preco="R$ 149,90"
            />

            <MockDeDados
                imagem="https://picsum.photos/200/200?a=5"
                nome="Produto 5"
                preco="R$ 149,90"
            />

            <MockDeDados
                imagem="https://picsum.photos/200/200?a=6"
                nome="Produto 6"
                preco="R$ 149,90"
            />
        </div>
    );
}

export default App;
