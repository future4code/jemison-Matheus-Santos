import perfil from "./perfil.png";
import "./App.css";

function App() {
    const onClickBotao = () => {
        alert("Boa noite, Matheus!");
    };

    return (
        <div className="App">
            <p>Bem vindo, Matheus!</p>
            <img src={perfil} className="App-perfil" alt="foto de perfil" />
            <p>Este é o meu primeiro site react. Ebaaaa!!!</p>
            <button className="App-botao" onClick={onClickBotao}>
                Clique aqui
            </button>
        </div>
    );
}

export default App;
