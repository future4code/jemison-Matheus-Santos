import React from "react";
import styled from "styled-components";

const IconContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
const IconImage = styled.img`
max-width: max-content;
    margin-right: 5px;
    cursor: pointer;
    transition: 0.1s;

    &:hover {
        opacity: 0.5;
    }

    &:active {
        transform: scale(1.2);
    }
`;

export function IconeComContador(props) {
    return (
        <IconContainer>
            <IconImage
                alt={"Icone"}
                src={props.icone}
                onClick={props.onClickIcone}
            />
            <p>{props.valorContador}</p>
        </IconContainer>
    );
}
