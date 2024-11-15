import './App.css';
import Header from './components/header';
import Home from './components/home';
import Sobre from './components/sobre';
import Habilidades from './components/habilidades';
import Projetos from './components/projetos';
import Contatos from './components/contatos';
import Footer from './components/footer';
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
      <Habilidades />
      <Projetos />
      <Contatos />
      <Footer />
    </div>
  );
}

export default App;
