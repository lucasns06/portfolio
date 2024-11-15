import React from "react";
import perfilFoto from '../img/perfil.jfif'

const Footer = () =>{
    return (
        <footer>
        <div className="footer1">
            <div className="logo">
                <img src={perfilFoto} className="footerImg" alt="fotoPerfil" />
                <p>Lucas nascimento</p> <br/>
            </div>
        </div>
        <div className="footerNav">
            <a href="#homeId">Inicio</a> <br/> <br/>
            <a href="#sobreId">Sobre</a> <br/><br/>
            <a href="#habilidadesId">Habilidades</a> <br/><br/>
            <a href="#projetosId">Projetos</a>
        </div>
        <div className="footerCredits">
            <p>Creditos</p><br/>
            <a href="https://help.iconscout.com/hc/en-gb" target="_blank">iconscout</a> <br/><br/>
            <a href="https://www.svgrepo.com" target="_blank">SVG Repo</a>
        </div>

    </footer>
    );
}
export default Footer;
