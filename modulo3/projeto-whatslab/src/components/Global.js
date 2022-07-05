import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

img {
    display: block;
    height: auto;
    max-width: 100%;
}

ul, li {
    list-style: none;
}`;
