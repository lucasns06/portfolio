import './App.css';
import Header from './components/header/header';
import Home from './components/home/home';
import Sobre from './components/sobre/sobre';
import Habilidades from './components/habilidades/habilidades';
import Projetos from './components/projetos/projetos';
import Contatos from './components/contato/contatos';
import Footer from './components/footer/footer';
import Obrigado from './components/obrigado/obrigado';
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {

  const body = document.body;
  function theme() {
    body.classList.toggle('dark-theme')
  }

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}
