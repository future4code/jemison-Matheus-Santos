import React from "react";
import { GlobalStyle } from "./components/global/StyledGlobal";
import Router from "./pages/Router";

function App() {
    return (
        <div>
            <GlobalStyle />
            <Router />
        </div>
    );
}

export default App;
