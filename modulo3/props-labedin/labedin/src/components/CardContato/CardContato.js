import React from "react";
import "./CardContato.css";

function CardContato(props) {
    return (
        <div className="contato-container container">
            <h2>{props.titulo}</h2>
            <div className="contato-item">
                <img src={props.imagem1} />
                <div>
                    <h4>{props.subtitulo1}</h4>
                    <p>{props.descricao11}</p>
                </div>
            </div>

            <div className="contato-item">
                <img src={props.imagem2} />
                <div>
                    <h4>{props.subtitulo2}</h4>
                    <p>{props.descricao21}</p>
                    <p>{props.descricao22}</p>
                </div>
            </div>

            <div className="contato-item">
                <img src={props.imagem3} />
                <div>
                    <h4>{props.subtitulo3}</h4>
                    <p className="normal">{props.descricao31}</p>
                </div>
            </div>

            <div className="contato-item">
                <img src={props.imagem4} />
                <div>
                    <h4>{props.subtitulo4}</h4>
                    <p>{props.descricao41}</p>
                </div>
            </div>

            <div className="contato-item">
                <img src={props.imagem5} />
                <div>
                    <h4>{props.subtitulo5}</h4>
                    <p>{props.descricao51}</p>
                </div>
            </div>

            <div className="contato-item">
                <img src={props.imagem6} />
                <div>
                    <h4>{props.subtitulo6}</h4>
                    <p className="normal">{props.descricao61}</p>
                </div>
            </div>
        </div>
    );
}

export default CardContato;
