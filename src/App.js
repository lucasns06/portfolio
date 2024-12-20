import './App.css';
import Header from './components/header/header';
import Home from './components/home/home';
import Sobre from './components/sobre/sobre';
import Habilidades from './components/habilidades/habilidades';
import Projetos from './components/projetos/projetos';
import Contatos from './components/contato/contatos';
import Footer from './components/footer/footer';
import Obrigado from './components/obrigado/obrigado';
import {  Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import React, { useEffect } from 'react'; 
export default function App() {

  const location = useLocation();

  useEffect(() => {

    if (location.state && location.state.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const body = document.body;
  function theme() {
    body.classList.toggle('dark-theme')
  }

  return (
    
      <Routes>
        <Route path="/" element={
          <div className="App">
            <Header />
            <Home />
            <Sobre />
            <Projetos />
            <Habilidades />
            <Contatos />
            <Footer />
          </div>}>
        </Route>
        <Route path="obrigado" element={<Obrigado />} />
      </Routes>
  );
}
