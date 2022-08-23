import styled, { createGlobalStyle } from "styled-components";

/* Estilos Globais */
export const GlobalStyles = createGlobalStyle`
* {
margin: 0;
padding: 0;
box-sizing: border-box;
}

body {
  color: slategray;
  font-family: 'Open Sans', 'Helvetica', sans-serif;
  font-size: 1rem;
}

h1 {
  margin: 21px 0;
  text-align: center;
}

button {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  color: #fff;

  background: slategray;
  padding: 0 20px;

  border-radius: 20px;
  border: none;

  height: 40px;
  min-width: 100px;

  cursor: pointer;

  &:hover{
    background: rgb(182, 212, 227);
  }
}
`;

/* Container */
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

/* Botões */
export const Botoes = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
`;

/* Formulário */
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 500px;
    margin-bottom: 25px;
`;

export const Select = styled.select`
    border-width: 1px;
    border-radius: 10px;
    padding: 4px 8px;
    height: 40px;
`;
export const Input = styled.input`
    border-width: 1px;
    border-radius: 10px;
    padding: 4px 8px;
    height: 40px;
`;
