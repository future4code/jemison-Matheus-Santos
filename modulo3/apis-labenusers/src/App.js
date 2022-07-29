import React from "react";
import TelaDeCadastro from "./TelaDeCadastro";
import TelaDeLista from "./TelaDeLista";
import { GlobalStyles } from "./styled";

function App() {
    return (
        <div>
            <GlobalStyles />
            <button>Trocar de tela</button>
            <TelaDeCadastro />
            <TelaDeLista />
        </div>
    );
}

export default App;
