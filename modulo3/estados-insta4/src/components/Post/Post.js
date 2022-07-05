import React, { useState } from "react";
import styled from "styled-components";

import { IconeComContador } from "../IconeComContador/IconeComContador";

import iconeCoracaoBranco from "../../img/favorite-white.svg";
import iconeCoracaoPreto from "../../img/favorite.svg";
import iconeComentario from "../../img/comment_icon.svg";
import { SecaoComentario } from "../SecaoComentario/SecaoComentario";

const PostContainer = styled.div`
    border: 1px solid rgb(219, 219, 219);
    border-radius: 4px;
    width: 450px;
    margin-bottom: 10px;
    background-color: #ffffff;
`;

const PostHeader = styled.div`
    display: flex;
    align-items: center;
    height: 40px;
    padding: 10px 15px;
`;

const PostFooter = styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    padding: 10px 15px;
    gap: 20px;
`;

const UserPhoto = styled.img`
    height: 30px;
    width: 30px;
    margin-right: 10px;
    border-radius: 50%;
`;

const PostPhoto = styled.img`
    width: 100%;
`;

function Post(props) {
    const [numeroCurtidas, setNumeroCurtidas] = useState(2999);
    const [curtido, setCurtido] = useState(false);
    const [comentando, setComentando] = useState(true);
    const [numeroComentarios, setNumeroComentarios] = useState(0);

    const onClickCurtida = () => {
        if (numeroCurtidas === 2999) {
            setCurtido(true);
            setNumeroCurtidas(numeroCurtidas + 1);
            console.log("Gostei!");
        } else {
            setCurtido(false);
            setNumeroCurtidas(numeroCurtidas - 1);
            console.log("Não gostei!");
        }
    };

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
        iconeCurtida = iconeCoracaoPreto;
    } else {
        iconeCurtida = iconeCoracaoBranco;
    }

    let componenteComentario;

    if (comentando) {
        componenteComentario = (
            <SecaoComentario aoEnviar={aoEnviarComentario} />
        );
    }

    return (
        <div>
            <PostContainer>
                <PostHeader>
                    <UserPhoto
                        src={props.fotoUsuario1}
                        alt={"Imagem do usuario"}
                    />
                    <p>{props.nomeUsuario1}</p>
                </PostHeader>
                <PostPhoto src={props.fotoPost1} alt={"Imagem do post"} />
                <PostFooter>
                    <IconeComContador
                        icone={iconeCurtida}
                        onClickIcone={onClickCurtida}
                        valorContador={numeroCurtidas}
                    />
                    <IconeComContador
                        icone={iconeComentario}
                        onClickIcone={onClickComentario}
                        valorContador={numeroComentarios}
                    />
                </PostFooter>
                {componenteComentario} 
            </PostContainer>

            <PostContainer>
                <PostHeader>
                    <UserPhoto
                        src={props.fotoUsuario2}
                        alt={"Imagem do usuario"}
                    />
                    <p>{props.nomeUsuario2}</p>
                </PostHeader>
                <PostPhoto src={props.fotoPost2} alt={"Imagem do post"} />
                <PostFooter>
                    <IconeComContador
                        icone={iconeCurtida}
                        onClickIcone={onClickCurtida}
                        valorContador={numeroCurtidas}
                    />
                    <IconeComContador
                        icone={iconeComentario}
                        onClickIcone={onClickComentario}
                        valorContador={numeroComentarios}
                    />
                </PostFooter>
                {componenteComentario}
            </PostContainer>

            <PostContainer>
                <PostHeader>
                    <UserPhoto
                        src={props.fotoUsuario3}
                        alt={"Imagem do usuario"}
                    />
                    <p>{props.nomeUsuario3}</p>
                </PostHeader>
                <PostPhoto src={props.fotoPost3} alt={"Imagem do post"} />
                <PostFooter>
                    <IconeComContador
                        icone={iconeCurtida}
                        onClickIcone={onClickCurtida}
                        valorContador={numeroCurtidas}
                    />
                    <IconeComContador
                        icone={iconeComentario}
                        onClickIcone={onClickComentario}
                        valorContador={numeroComentarios}
                    />
                </PostFooter>
                {componenteComentario}
            </PostContainer>
        </div>
    );
}

export default Post;
