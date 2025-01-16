import "./App.css";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Sobre from "./components/sobre/sobre";
import Habilidades from "./components/habilidades/habilidades";
import Projetos from "./components/projetos/projetos";
import Contatos from "./components/contato/contatos";
import Footer from "./components/footer/footer";
import Obrigado from "./components/obrigado/obrigado";
import darkLogo from './img/dark.svg';
import lightLogo from './img/light.svg';
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
export default function App() {
  const savedTheme = localStorage.getItem("isDarkTheme") === "true";

  const [themeImgSrc, setThemeImgSrc] = useState(savedTheme ? lightLogo : darkLogo);
  const [isDarkTheme, setIsDarkTheme] = useState(savedTheme);

  const imgTheme = useRef(null);

  const toggleTheme = () => {
    setIsDarkTheme((prevState) => !prevState);
  };
    useEffect(() => {
        if (imgTheme.current) {
            imgTheme.current.classList.add('themeEntry');
            const timer = setTimeout(() => {
                imgTheme.current.classList.remove('themeEntry');
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, []);


    useEffect(() => {
        localStorage.setItem("isDarkTheme", isDarkTheme);
        const body = document.body;
        if (isDarkTheme) {
            body.classList.add('dark-theme');
            setThemeImgSrc(lightLogo);
        } else {
            body.classList.remove('dark-theme');
            setThemeImgSrc(darkLogo);
        }
    }, [isDarkTheme]);

  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const body = document.body;
  function theme() {
    body.classList.toggle("dark-theme");
  }

  return (
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
            <img
              ref={imgTheme}
              src={themeImgSrc}
              className="imgTheme"
              alt={isDarkTheme ? "Tema Claro" : "Tema Escuro"}
              onClick={toggleTheme}
            />
          </div>
        }
      ></Route>
      <Route path="obrigado" element={<Obrigado />} />
    </Routes>
  );
}
