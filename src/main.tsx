import { createRoot } from 'react-dom/client'

import { BrowserRouter, Route, Routes } from "react-router";
import Games from './pages/Games.tsx'
import TestPage from './pages/TestPage.tsx';

import "./index.css"

createRoot(document.getElementById('root')!).render(

    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Games />} />
            <Route path="/test" element={<TestPage />} />
        </Routes>
    </BrowserRouter>

)
