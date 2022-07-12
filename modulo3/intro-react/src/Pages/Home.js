import logo from "./labenu.png";
import "./Home.css";

function Home() {
    const BotaoClicado = () => {
        alert("Boa noite, Matheus!");
    };

    return (
        <div className="container">
            <h1>Olá! Eu sou o Matheus Queiroz!</h1>
            <img src={logo} alt="Matheus Queiroz" />
            <h3>Este é o meu primeiro site React</h3>
            <button className="botao" onClick={BotaoClicado}>Clique aqui</button>
        </div>
    );
}

export default Home;
