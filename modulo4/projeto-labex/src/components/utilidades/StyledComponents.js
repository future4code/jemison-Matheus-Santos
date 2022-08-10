import styled from "styled-components";

export const Buttons = styled.div`
    display: flex;
    gap: 30px;
`;

export const Button = styled.button`
    color: #fff;
    font-size: 1rem;
    font-family: Arial, sans-serif;
    background-color: #708090;
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        background-color: #b6d4e3;
    }
`;
