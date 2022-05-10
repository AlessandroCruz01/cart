import React from "react";
import Home from "./pages/Home";
import Carrinho from "./pages/Carrinho";
import {BrowserRouter, Routes, Route} from  "react-router-dom";
import CountProvider from "./context/Count";

function App() {

    return (
        <CountProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/carrinho" element={<Carrinho/>} />
                </Routes>
            </BrowserRouter>
        </CountProvider>

    );
}

export default App;
