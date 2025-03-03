import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from 'react-router';

import "./index.css";

import { Provider } from "react-redux";
import { store } from "./store/store";

import MainPage from './pages/MainPage/MainPage';
import RecipePage from './pages/RecipePage/RecipePage';
import SelectedRecipesPage from './pages/SelectedRecipesPage/SelectedRecipesPage';


const root = ReactDOM.createRoot(
    document.getElementById("root")
);
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/recipe/:id' element={<RecipePage />} />
                <Route path='/selectedrecipes' element={<SelectedRecipesPage />} />
            </Routes>
        </BrowserRouter>
    </Provider>,
);
