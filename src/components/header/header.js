import React, { useState, useEffect, useRef } from 'react';
import darkLogo from '../../img/dark.svg';
import lightLogo from '../../img/light.svg';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

import './header.css';
import '../../App.css';

const Header = () => {
    const savedTheme = localStorage.getItem("isDarkTheme") === "true";
    const [isDarkTheme, setIsDarkTheme] = useState(savedTheme);
    const [themeImgSrc, setThemeImgSrc] = useState(savedTheme ? lightLogo : darkLogo);
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const menuSvgRef = useRef(null);
    const subMenuRef = useRef(null);
    const imgTheme = useRef(null);

    const closedPath = 'M4 6H20M4 12H20M4 18H20';
    const openPath = 'M6 6L18 18M6 18L18 6';

    const toggleMenu = () => {
        setIsMenuVisible((prevState) => !prevState);
    };

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
        if (subMenuRef.current) {
            const header = document.querySelector('header');

            if (isMenuVisible) {
                subMenuRef.current.style.display = 'grid';

                const height = subMenuRef.current.scrollHeight;
                gsap.to(subMenuRef.current, {
                    height: height,
                    duration: 0.5,
                    ease: "power4.inOut",
                });

                header.classList.add('headerSombra');
            } else {
                gsap.to(subMenuRef.current, {
                    height: 0,
                    duration: 0.3,
                    ease: "power4.inOut",
                    onComplete: () => {
                        if (subMenuRef.current) {
                            subMenuRef.current.style.display = 'none';
                        }
                    },
                });

                if (window.scrollY < 50) {
                    header.classList.remove('headerSombra');
                }
            }
        }

        if (menuSvgRef.current) {
            gsap.to(menuSvgRef.current, {
                attr: { d: isMenuVisible ? openPath : closedPath },
                duration: 0.5,
                ease: "power4.inOut",
            });
        }
    }, [isMenuVisible]);

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

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.classList.add('headerSombra');
            } else {
                if (!isMenuVisible) {
                    header.classList.remove('headerSombra');
            }
        }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isMenuVisible]);

    return (
        <header>
            <a href="#" className='logo-name'>LucasDev</a>
            <nav>
                <Link to="/" state={{ scrollTo: 'homeId' }} className='aHeader'>Inicio</Link>
                <Link to="/" state={{ scrollTo: 'sobreId' }} className='aHeader'>Sobre</Link>
                <Link to="/" state={{ scrollTo: 'projetosId' }} className='aHeader'>Projetos</Link>
                <Link to="/" state={{ scrollTo: 'habilidadesId' }} className='aHeader'>Habilidades</Link>
                <Link to="/" state={{ scrollTo: 'contatosId' }} className='contactBtn'>Contato</Link>
            </nav>
            <img ref={imgTheme}
                src={themeImgSrc}
                className="imgTheme"
                alt={isDarkTheme ? 'Tema Claro' : 'Tema Escuro'}
                onClick={toggleTheme}
            />
            <div className='headerMobile'>
                <div className='headerMobileIcons'>
                    <img ref={imgTheme}
                        src={themeImgSrc}
                        className="imgTheme imgThemeMobile"
                        alt={isDarkTheme ? 'Tema Claro' : 'Tema Escuro'}
                        onClick={toggleTheme}
                    />
                    <div className="menu" onClick={toggleMenu}>
                        <svg viewBox="4 4 16 16" fill="var(--cor-preta)" xmlns="http://www.w3.org/2000/svg" className='menuSvg'>
                            <path ref={menuSvgRef} d={closedPath} stroke="var(--cor-preta)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
                <div ref={subMenuRef} className="sub-menu">
                    <Link to="/" state={{ scrollTo: 'homeId' }} >Inicio</Link>
                    <Link to="/" state={{ scrollTo: 'sobreId' }} >Sobre</Link>
                    <Link to="/" state={{ scrollTo: 'projetosId' }} >Projetos</Link>
                    <Link to="/" state={{ scrollTo: 'habilidadesId' }} >Habilidades</Link>
                    <Link to="/" state={{ scrollTo: 'contatosId' }} className='contactBtn'>Contato</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
