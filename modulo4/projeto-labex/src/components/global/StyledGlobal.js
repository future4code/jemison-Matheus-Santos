import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Open Sans', 'Helvetica', sans-serif;
}

a {
    color: inherit;
    text-decoration: none;
}
`;

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
`;

export const Title = styled.h1`
    color: #708090;
    font-size: 2rem;
    margin-bottom: 20px;
`;
