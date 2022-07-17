import React from "react";
import styled from "styled-components";
import logoInstagram from "../../img/logo-instagram.svg";
import iconeCamera from "../../img/camera.svg";
import iconeMensagem from "../../img/message.svg";

const CabecalhoBG = styled.header`
    background-color: #ffffff;
    padding: 5px 10px;
    border-bottom: 1px solid rgb(219, 219, 219);
`;

const Cabecalho = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
`;

const Icones = styled.img`
    cursor: pointer;
    padding: 5px;
`;

const Logo = styled.img`
    height: 29px;
`;

function Header() {
    return (
        <CabecalhoBG>
            <Cabecalho>
                <Icones src={iconeCamera} />
                <a href="#">
                    <Logo src={logoInstagram} alt="Logo do Instagram" />
                </a>
                <Icones src={iconeMensagem} />
            </Cabecalho>
        </CabecalhoBG>
    );
}

export default Header;
