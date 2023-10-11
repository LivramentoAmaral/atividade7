import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Pages/home';
import PageLogin from '../Pages/Login';

function Rotas() {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" index element={< PageLogin/>} />
                <Route path="/home" element={< Home/>} />
            </Routes>
        </BrowserRouter>
        </>
    );
}

export default Rotas;