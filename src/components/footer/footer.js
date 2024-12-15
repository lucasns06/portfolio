import React from "react";
import perfilFoto from '../../img/perfil.jfif'
import './footer.css';

const Footer = () =>{
    return (
        <footer>
        <div className="footer1">
            <a className="logo" href="https://github.com/lucasns06" target="_blank" rel="noopener noreferrer">
                <img src={perfilFoto} className="footerImg" alt="fotoPerfil" />
                <p>Lucas nascimento</p> <br/>
            </a>
        </div>
        <div className="footerNav">
            <h1>Navegar</h1>
            <a href="#homeId">Inicio</a> <br/> <br/>
            <a href="#sobreId">Sobre</a> <br/><br/>
            <a href="#habilidadesId">Habilidades</a> <br/><br/>
            <a href="#projetosId">Projetos</a>
        </div>
        <div className="footerCredits">
            <h1>Creditos</h1>
            <a href="https://help.iconscout.com/hc/en-gb" target="_blank">Iconscout</a> <br/><br/>
            <a href="https://www.svgrepo.com" target="_blank">SVG Repo</a>
        </div>

    </footer>
    );
}
export default Footer;
