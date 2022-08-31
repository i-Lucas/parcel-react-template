import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import Home from "../pages/home";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
};

function NotFound() {
    return <h1>NotFound</h1>
};