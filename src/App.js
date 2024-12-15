import './App.css';
import Header from './components/header/header';
import Home from './components/home/home';
import Sobre from './components/sobre/sobre';
import Habilidades from './components/habilidades/habilidades';
import Projetos from './components/projetos/projetos';
import Contatos from './components/contato/contatos';
import Footer from './components/footer/footer';
function App() {
  
  const body = document.body;
  function theme() {
    body.classList.toggle('dark-theme')
  }

  return (
    <div className="App">
      <Header />
      <Home />
      <Sobre />
      <Projetos />
      <Habilidades />
      <Contatos />
      <Footer />
    </div>
  );
}

export default App;
