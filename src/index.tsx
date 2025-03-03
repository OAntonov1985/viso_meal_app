import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router";

import "./index.css";

import MainPage from "./pages/MainPage/MainPage";
import RecipePage from "./pages/RecipePage/RecipePage";
import SelectedRecipesPage from "./pages/SelectedRecipesPage/SelectedRecipesPage";
import { StoreProvider } from "./store/StoreProvider";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
);
root.render(
    <StoreProvider>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/recipe/:id' element={<RecipePage />} />
                <Route
                    path='/selectedrecipes'
                    element={<SelectedRecipesPage />}
                />
            </Routes>
        </BrowserRouter>
    </StoreProvider>,
);
