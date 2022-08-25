import React from "react";
import Router from "./router/Router";
import { GlobalStyles, Container } from "./StyledApp";

export default function App() {
    return (
        <Container>
            <Router />
            <GlobalStyles />
        </Container>
    );
}
