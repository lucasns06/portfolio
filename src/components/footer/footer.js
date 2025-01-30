import React from "react";
import './footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footerContainer">
                <h1>Lucas Nascimento</h1>
                <div className="footerNav">
                    <h1>Links</h1>
                    <a href="https://www.linkedin.com/in/lucasns06/" target="_blank" rel="noopener noreferrer">Linkedin</a> <br /> <br />
                    <a href="https://github.com/lucasns06" target="_blank" rel="noopener noreferrer">Github</a> <br /><br />
                    <a href="https://www.instagram.com/lucasns06/" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
                <div className="footerCredits">
                    <h1>Creditos</h1>
                    <a href="https://www.svgrepo.com" target="_blank" rel="noopener noreferrer">SVG Repo</a>
                </div>
            </div> <br /><br />
            <p>© 2024 Lucas Nascimento. Todos os direitos reservados.</p> <br />
        </footer>
    );
}
export default Footer;
