import React, { useState, useEffect, useRef  } from 'react';
import darkLogo from '../img/dark.svg';
import lightLogo from '../img/light.svg';
import gsap from 'gsap';

const Header = () => {
    const savedTheme = localStorage.getItem("isDarkTheme") === "true";
    const [isDarkTheme, setIsDarkTheme] = useState(savedTheme); // Estado para controlar o tema
    const [themeImgSrc, setThemeImgSrc] = useState(savedTheme ? lightLogo : darkLogo); // Inicializa com o tema escuro
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const imagem = document.querySelector('.imgTheme');
    const closedPath = 'M4 6H20M4 12H20M4 18H20';
    const openPath = 'M6 6L18 18M6 18L18 6';
    const menuSvgRef = useRef(null);
    const subMenuRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible)
    };

    const toggleTheme = () => {
        setIsDarkTheme(prevState => !prevState); // Alterna entre true/false
    };

    useEffect(() =>{
        if (subMenuRef.current){
            subMenuRef.current.style.display = isMenuVisible ? 'grid' : 'none' 
        }
        
        if (menuSvgRef.current) {
            gsap.to(menuSvgRef.current, {
                attr: { d: isMenuVisible ? openPath : closedPath },
                duration: 0.5,
                ease: "power4.inOut",
            });
        }
        if (subMenuRef.current) {

            if (isMenuVisible) {
                const height = subMenuRef.current.scrollHeight;
                gsap.to(subMenuRef.current, {
                    height: height, 
                    duration: 0.5,
                    ease: "power4.inOut",
                });
            } else {
                gsap.to(subMenuRef.current, {
                    height: 0,
                    duration: 0.3,
                    ease: "power4.inOut",
                });
            }
        }

    }, [isMenuVisible])

    // Efeito de alteração de tema
    useEffect(() => {
        localStorage.setItem("isDarkTheme", isDarkTheme)
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
                <a href="#sobreId" className='aHeader' >Sobre</a>
                <a href="#projetosId" className='aHeader'>Projetos</a>
                <a href="#habilidadesId" className='aHeader'>Habilidades</a>
                <a href="#contatosId" className="contactBtn">Contato</a>
                <img
                    src={themeImgSrc}
                    className="imgTheme"
                    alt={isDarkTheme ? 'Tema Claro' : 'Tema Escuro'}
                    onClick={toggleTheme}
                />
                <div className="menu" onClick={toggleMenu}>
                    <svg viewBox="4 4 16 16" fill="var(--cor-preta)" xmlns="http://www.w3.org/2000/svg" className='menuSvg'>
                        <path ref={menuSvgRef} d={closedPath} stroke="var(--cor-preta)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div ref={subMenuRef} className="sub-menu">
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
