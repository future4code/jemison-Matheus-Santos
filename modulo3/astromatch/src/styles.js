import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

img {
    display: block;
    max-width: 100%;
}

a {
    color: inherit;
    text-decoration: none;
}

ul {
    list-style: none;
}
`;
