import React from "react";
import Router from "./router/Router";
import { GlobalStyles, Container } from "./StyledApp";
import ApplyToTrips from "./hook/ApplyToTrips";
import UseRequestData from "./hook/UseRequestData";

export default function App() {
    return (
        <Container>
            <Router />
            <GlobalStyles />
            <UseRequestData />
            <ApplyToTrips />
        </Container>
    );
}
