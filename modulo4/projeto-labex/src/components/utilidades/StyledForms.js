import styled from "styled-components";

export const Input = styled.input`
    border: 1px solid #999;
    outline: none;
    border-radius: 10px;
    padding: 10px 8px;
    width: 500px;

    &:first-of-type {
        margin-bottom: 15px;
    }

    &:last-of-type {
        margin-bottom: 25px;
    }

    &:focus {
        border-color: #000;
        background-color: #fffffe;
    }
`;
