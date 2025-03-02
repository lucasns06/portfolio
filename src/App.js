import "./App.css";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Sobre from "./components/sobre/sobre";
import Habilidades from "./components/habilidades/habilidades";
import Projetos from "./components/projetos/projetos";
import Contatos from "./components/contato/contatos";
import Footer from "./components/footer/footer";
import Obrigado from "./components/obrigado/obrigado";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import { ThemeProvider } from "./components/themeContext";
export default function App() {

  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);


  return (
    <ThemeProvider>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <Header />
              <Home />
              <Sobre />
              <Projetos />
              <Habilidades />
              <Contatos />
              <Footer />
            </div>
          }
        ></Route>
        <Route path="obrigado" element={<Obrigado />} />
      </Routes>
    </ThemeProvider>
  );
}
