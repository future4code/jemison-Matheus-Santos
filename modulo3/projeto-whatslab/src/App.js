import "./App.css";
import { Background, Container, Conversas } from "./components/Tela/Style";
import Global from "./components/Global";

import perfil from "./img/icones/perfil.svg";
import status from "./img/icones/status.svg";
import novaConversa from "./img/icones/nova-conversa.svg";
import pesquisar from "./img/icones/pesquisar.svg";

function App() {
    return (
        <Background>
            <Global />
            <Container>
                <Conversas>
                    <div>
                        <img src={perfil} alt="" />
                        <ul>
                            <li>
                                <img src={status} alt="" />
                            </li>

                            <li>
                                <img src={novaConversa} alt="" />
                            </li>

                            <li>
                                <img src={pesquisar} alt="" />
                            </li>
                        </ul>
                    </div>
                </Conversas>
            </Container>
        </Background>
    );
}

export default App;
