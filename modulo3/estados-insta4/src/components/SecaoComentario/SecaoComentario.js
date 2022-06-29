import React from "react";
import styled from "styled-components";

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`;

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
    padding: 5px;
    opacity: 0.8;
`;

export function SecaoComentario(props) {
    return (
        <CommentContainer>
            <InputComentario
                placeholder={"Comentar como oabsorvedor..."}
                value={props.onChangeComentario}
                onChange={props.onChangeComentario}
            />
            <button onClick={props.aoEnviar}>Publicar</button>
        </CommentContainer>
    );
}
