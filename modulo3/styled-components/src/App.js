import { Titulo } from "./style";
import { Botao } from "./utilidades/componentes";
import { Header, HeaderImagem } from "./global/Header";
import { Input, Label } from "./formulario/Formulario";
import { Footer } from "./global/Footer";
import logo from "./img/logo.jpg";
import "./App.css";

function App() {
    return (
        <div className="background">
            <Header>
                <HeaderImagem src={logo}></HeaderImagem>
                <Titulo>LabZap</Titulo>
            </Header>

            <main className="main container">
                <div>
                    <Label>Remetente</Label>
                    <Input></Input>
                </div>

                <div>
                    <Label>Mensagem</Label>
                    <Input></Input>
                </div>

                <Botao>Enviar mensagem</Botao>
            </main>

            <Footer>2022 © LabZap LLC</Footer>
        </div>
    );
}

export default App;
