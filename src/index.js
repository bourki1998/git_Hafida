import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./store";
import Login from "./pages/loginComponent";
import HomePage from "./pages/homeComponent";
import an from "./translation/an.json";
import fr from "./translation/fr.json";
import ar from "./translation/ar.json";
import { setTranslations, setDefaultLanguage } from "react-multi-lang";
import AppProvider from "./components/AppProvider/AppProvider";

setTranslations({ an, fr, ar });

const lang = localStorage.getItem("lang");
if (lang) {
  setDefaultLanguage(lang);
} else {
  localStorage.setItem("lang", "fr");
  setDefaultLanguage("fr");
}

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  </Provider>
);
