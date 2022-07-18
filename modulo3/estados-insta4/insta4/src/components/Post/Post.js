import React, { useState } from "react";
import styled from "styled-components";

import iconeCoracaoPadrao from "../../img/favorite-white.svg";
import iconeCoracaoVermelho from "../../img/favorite.svg";
import iconeComentario from "../../img/comment_icon.svg";
import iconeMais from "../../img/mais.svg";
import iconeCompartilhar from "../../img/share_icon.svg";
import iconeSalvarBranco from "../../img/save_icon-white.svg";
import iconeSalvarPreto from "../../img/save_icon-black.svg";

import { IconeComContador } from "../IconeComContador/IconeComContador";
import { SecaoComentario } from "../SecaoComentario/SecaoComentario";

const PostContainer = styled.div`
    background-color: #ffffff;
    border-bottom: 1px solid gray;
    width: 100%;
    margin-bottom: 10px;
`;

// POST HEADER
const PostHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 20px;
    font-size: 0.875rem;
    font-weight: 500;
`;

const HeaderInfos = styled.div`
    display: flex;
    align-items: center;
`;

const SelecionarMaisOpcoes = styled.img`
    cursor: pointer;
`;

// POST FOOTER
const PostFooter = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
`;

const PostFooterInfos = styled.div`
    display: flex;
    gap: 10px;
`;

const UserPhoto = styled.img`
    height: 32px;
    width: 32px;
    margin-right: 10px;
    border-radius: 50%;
    border: 1px solid rgb(219, 219, 219);
`;

const PostPhoto = styled.img`
    width: 100%;
`;

function Post(props) {
    const [curtido, setCurtido] = useState(false);
    const [numeroCurtidas, setnumeroCurtidas] = useState(0);

    const [comentando, setComentando] = useState(false);
    const [numeroComentarios, setNumeroComentarios] = useState(0);

    const [compartilhado, setCompartilhado] = useState(false);
    const [numeroCompartilhamentos, setNumeroCompartilhamentos] = useState(0);

    const [salvo, setSalvo] = useState(false);
    const [numeroSalvos, setNumeroSalvos] = useState(0);

    const onClickCurtida = () => {
        setCurtido(!curtido);

        if (curtido === false) {
            setnumeroCurtidas(numeroCurtidas + 1);
            console.log(`Você curtiu`);
        } else {
            setnumeroCurtidas(numeroCurtidas - 1);
            console.log("Você descurtiu!");
        }
    };

    let totalCurtidas = numeroCurtidas > 0 ? `${numeroCurtidas} curtida` : "";

    const onClickComentario = () => {
        setComentando(!comentando);
        if (comentando) {
            componenteComentario = (
                <SecaoComentario aoEnviar={aoEnviarComentario} />
            );
        }
        console.log(comentando);
    };

    const aoEnviarComentario = () => {
        setComentando(false);
        setNumeroComentarios(numeroComentarios + 1);
    };

    let iconeCurtida;

    if (curtido) {
        iconeCurtida = iconeCoracaoVermelho;
    } else {
        iconeCurtida = iconeCoracaoPadrao;
    }

    let componenteComentario;

    if (comentando) {
        componenteComentario = (
            <SecaoComentario aoEnviar={aoEnviarComentario} />
        );
    }

    const onClickCompartilhar = () => {
        setCompartilhado(!compartilhado);
        if (compartilhado > 0) {
            setNumeroCompartilhamentos(numeroCompartilhamentos - 1);
            console.log("Não compartilhou!");
        } else {
            setNumeroCompartilhamentos(numeroCompartilhamentos + 1);
            console.log("Compartilhou!");
        }
    };

    const onClickSalvar = () => {
        setSalvo(!salvo);

        if (salvo === false) {
            setNumeroSalvos(numeroSalvos + 1);
            console.log(`Você salvou`);
        } else {
            setNumeroSalvos(numeroSalvos - 1);
            console.log("Você tirou dos salvos!");
        }
    };

    let iconeSalvar;

    if (salvo) {
        iconeSalvar = iconeSalvarPreto;
    } else {
        iconeSalvar = iconeSalvarBranco;
    }

    return (
        <PostContainer>
            <PostHeader>
                <HeaderInfos>
                    <a href="#">
                        <UserPhoto
                            src={props.fotoUsuario}
                            alt={"Imagem do usuario"}
                        />
                    </a>
                    <a href="#">{props.nomeUsuario}</a>
                </HeaderInfos>

                <SelecionarMaisOpcoes src={iconeMais} />
            </PostHeader>

            <PostPhoto src={props.fotoPost} alt={"Imagem do post"} />

            <PostFooter>
                <PostFooterInfos>
                    <IconeComContador
                        icone={iconeCurtida}
                        onClickIcone={onClickCurtida}
                        valorContador={totalCurtidas}
                    />
                    <IconeComContador
                        icone={iconeComentario}
                        onClickIcone={onClickComentario}
                        valorContador={numeroComentarios}
                    />
                    <IconeComContador
                        icone={iconeCompartilhar}
                        onClickIcone={onClickCompartilhar}
                    />
                </PostFooterInfos>

                <IconeComContador
                    icone={iconeSalvar}
                    onClickIcone={onClickSalvar}
                />
            </PostFooter>

            {componenteComentario}
        </PostContainer>
    );
}

export default Post;
