import React, { useState, useEffect } from 'react';
import darkLogo from '../img/dark.svg';
import lightLogo from '../img/light.svg';
import gsap from 'gsap';

const Header = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false); // Estado para controlar o tema
    const [themeImgSrc, setThemeImgSrc] = useState(darkLogo); // Inicializa com o tema escuro
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const imagem = document.querySelector('.imgTheme');

    const menu = document.querySelector('.menu');
    const subMenu = document.querySelector('.sub-menu');


    // Função para alternar entre os temas
    const toggleTheme = () => {
        setIsDarkTheme(prevState => !prevState); // Alterna entre true/false
    };

    // window.onclick = function (event) {
    //     if (!subMenu.contains(event.target) && !menu.contains(event.target)) {
    //         subMenu.style.display = 'none';
    //     }
    // }

    // Efeito de alteração de tema
    useEffect(() => {
        const body = document.body;
        if (isDarkTheme) {
            body.classList.add('dark-theme');
            setThemeImgSrc(lightLogo); // Muda para a imagem de tema claro
            gsap.fromTo
                (imagem,
                    { scale: 0.5 },
                    { scale: 1 }
                )
        } else {
            body.classList.remove('dark-theme');
            setThemeImgSrc(darkLogo); // Muda para a imagem de tema escuro
            gsap.fromTo
                (imagem,
                    { scale: 0.5 },
                    { scale: 1 }
                )

        }
    }, [isDarkTheme]); // O efeito será disparado sempre que isDarkTheme mudar

    // Evento de scroll para mudar o boxShadow do header
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
            } else {
                header.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0)";
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <header>
            <nav>
                <a href="#homeId" className='aHeader'>Inicio</a>
                <a href="#sobreId"className='aHeader' >Sobre</a>
                <a href="#projetosId" className='aHeader'>Projetos</a>
                <a href="#habilidadesId" className='aHeader'>Habilidades</a>
                <a href="#contatosId" className="contactBtn">Contato</a>
                <img
                    src={themeImgSrc}
                    className="imgTheme"
                    alt={isDarkTheme ? 'Tema Claro' : 'Tema Escuro'}
                    onClick={toggleTheme}
                />
                <div className="logoImg menu" onClick={() => setIsMenuVisible(!isMenuVisible)}>
                    <div className="sub-menu" style={{ display: isMenuVisible ? 'grid' : 'none' }}>
                        <a href="#homeId">Inicio</a>
                        <a href="#sobreId">Sobre</a>
                        <a href="#projetosId">Projetos</a>
                        <a href="#habilidadesId">Habilidades</a>
                        <a href="#contatosId" className="contactBtn">Contato</a>
                    </div>
                </div>

            </nav>
        </header>
    );
};

export default Header;
