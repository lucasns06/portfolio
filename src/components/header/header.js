import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

import './header.css';
import '../../App.css';

const Header = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const menuSvgRef = useRef(null);
    const subMenuRef = useRef(null);

    const closedPath = 'M4 6H20M4 12H20M4 18H20';
    const openPath = 'M6 6L18 18M6 18L18 6';

    const toggleMenu = () => {
        setIsMenuVisible((prevState) => !prevState);
      };

    useEffect(() => {
        if (subMenuRef.current) {
            const header = document.querySelectorAll('header');

            if (isMenuVisible) {
                subMenuRef.current.style.display = 'grid';

                // const height = subMenuRef.current.scrollWidth;
                gsap.to(subMenuRef.current, {
                    width: '100%',
                    height: 'max-content',
                    duration: 0.5,
                    ease: "power4.inOut",
                });

                header.forEach(item => {
                    
                    item.classList.add('headerSombra');
                });
            } else {
                gsap.to(subMenuRef.current, {
                    width: 0,
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
                    header.forEach(item => {
                        
                        item.classList.remove('headerSombra');
                    });
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
            <a href="/" className='logo-name'>LucasDev</a>
            <nav>
                <Link to="/" state={{ scrollTo: 'homeId' }} className='aHeader'>Inicio</Link>
                <Link to="/" state={{ scrollTo: 'sobreId' }} className='aHeader'>Sobre</Link>
                <Link to="/" state={{ scrollTo: 'projetosId' }} className='aHeader'>Projetos</Link>
                <Link to="/" state={{ scrollTo: 'habilidadesId' }} className='aHeader'>Habilidades</Link>
                <Link to="/" state={{ scrollTo: 'contatosId' }} ><button className='projetosBtn contBtn sombra'>Contato</button></Link>
            </nav>
       
            <div className='headerMobile'>
                <div className='headerMobile-top'>
                    <a href="/" className='logo-name logo-mobile'>LucasDev</a>
                    <div className='headerMobileIcons'>
                        {/* <img ref={imgTheme}
                            src={themeImgSrc}
                            className="imgTheme imgThemeMobile"
                            alt={isDarkTheme ? 'Tema Claro' : 'Tema Escuro'}
                            onClick={toggleTheme}
                        /> */}
                        <div className="menu" onClick={toggleMenu}>
                            <svg viewBox="4 4 16 16" fill="var(--cor-preta)" xmlns="http://www.w3.org/2000/svg" className='menuSvg'>
                                <path ref={menuSvgRef} d={closedPath} stroke="var(--cor-preta)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div ref={subMenuRef} className="sub-menu headerSombra">
                    <Link to="/" state={{ scrollTo: 'homeId' }} >Inicio</Link>
                    <Link to="/" state={{ scrollTo: 'sobreId' }} >Sobre</Link>
                    <Link to="/" state={{ scrollTo: 'projetosId' }} >Projetos</Link>
                    <Link to="/" state={{ scrollTo: 'habilidadesId' }} >Habilidades</Link>
                    <Link to="/" state={{ scrollTo: 'contatosId' }} ><button className='projetosBtn sombra'>Contato</button></Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
