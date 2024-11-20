import { useLayoutEffect } from "react";

import React from "react";

import htmlImg from '../img/hab/html.png';
import cssImg from '../img/hab/css.png';
import javascriptImg from '../img/hab/javascript.png';
import javaImg from '../img/hab/java.png';
import cSharpImg from '../img/hab/cSharp.png';
import sqlImg from '../img/hab/sql.png';
import reactImg from '../img/hab/react.png';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Habilidades = () => {
    const texts = document.querySelectorAll('.textAnim');
    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        texts.forEach(Anima => {
            gsap.fromTo(
                Anima,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    scrollTrigger: {
                        trigger: Anima,
                        toggleActions: "restart none none none"
                    }
                }
            );
        });


        const habilidadesContainer = document.querySelector('.habilidadesContainer');
        if (habilidadesContainer) {
            gsap.to(habilidadesContainer, {
                scrollTrigger: {
                    trigger: habilidadesContainer,
                    toggleActions: "restart none none none"
                },
                opacity: 1,
                duration: 2
            });
        }

    }, []);

    const fecharTodosModais = () => {
        const modais = document.querySelectorAll('.modal');
        modais.forEach(modal => {
            modal.style.display = 'none';
        });
    };
    const abrirModal = (num) => {
        fecharTodosModais();
        const modais = document.querySelector('.modais');
        const modal = document.querySelector(`.modal-${num}`);

        modais.style.display = 'block';
        modal.style.display = 'block';

        gsap.fromTo(modal,
            { scale: 0.5, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }
        );
    };

    const closeModal = () => {
        const modais = document.querySelector('.modais');
        const modal = document.querySelectorAll('.modal');
        modais.style.display = 'none';
        modal.forEach((evento) => {
            evento.style.display = 'none';
        });
    };

    useLayoutEffect(() => {

        const modais = document.querySelector('.modais');
        modais.style.display = 'none';
    }, []);


    return (
        <div className="habilidades" id="habilidadesId">
            <h1 className="MinhasHab textAnim">Minhas <span className="span">habilidades</span></h1><br />
            <h2>Clique nos modais para saber mais.</h2> <br /><br />
            <div className="modais">
                <div className="modal modal-1">
                    <h1>HTML</h1>
                    <img src={htmlImg} alt="HTML" />
                    <div className="modal-text">
                        <ul className="modalUL">
                            <li>Semântica</li>
                            <li>Formulários</li>
                            <li>Tabelas</li>
                            <li>Videos e Audios</li>
                        </ul><br /><br />
                        <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="_blank" rel="noopener noreferrer">MDN Web Docs</a> <br />
                        <br />
                    </div>
                    <button className="closeModal" onClick={closeModal}>FECHAR</button>
                </div>
                <div className="modal modal-2">
                    <h1>CSS</h1>
                    <img src={cssImg} alt="CSS" />
                    <ul className="modalUL">
                            <li>Seletores</li>
                            <li>Responsividade</li>
                            <li>Animações</li>
                            <li>Variáveis</li>
                        </ul><br /><br />
                    <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target="_blank" rel="noopener noreferrer">MDN Web Docs</a> <br /><br />
                    <button className="closeModal" onClick={() => closeModal()}>FECHAR</button>
                </div>
                <div className="modal modal-3">
                    <h1>JAVASCRIPT</h1>
                    <img src={javascriptImg} alt="JavaScript" />
                    <p>JavaScript® (às vezes abreviado para JS) é uma linguagem leve, interpretada e <br />
                        baseada em objetos com funções de primeira classe, mais conhecida como a <br />
                        linguagem de script para páginas Web, mas usada também em vários outros <br />
                        ambientes sem browser, tais como node.js, Apache CouchDB e Adobe Acrobat.</p><br /><br />
                    <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">MDN Web Docs</a> <br />
                    <br />
                    <button className="closeModal" onClick={() => closeModal()}>FECHAR</button>
                </div>
                <div className="modal modal-4">
                    <h1>React</h1>
                    <img src={reactImg} alt="React" />
                    <p>React é uma biblioteca JavaScript para construção de interfaces de usuário.</p><br />
                    <a href="https://react.dev/"
                        target="_blank" rel="noopener noreferrer">react</a> <br /><br />
                    <button className="closeModal" onClick={() => closeModal()}>FECHAR</button>
                </div>
                <div className="modal modal-5">
                    <h1>JAVA</h1>
                    <img src={javaImg} alt="Java" />
                    <p>Java é uma linguagem de programação amplamente usada para codificar <br />
                        aplicações Web. <br />
                        Java é uma linguagem multiplataforma, orientada a objetos e centrada <br />
                        em rede que pode ser usada como uma plataforma em si.</p><br /><br />
                    <a href="https://aws.amazon.com/pt/what-is/java/" target="_blank" rel="noopener noreferrer">Amazon Web Services</a> <br /><br />
                    <button className="closeModal" onClick={() => closeModal()}>FECHAR</button>
                </div>
                <div className="modal modal-6">
                    <h1>C#</h1>
                    <img src={cSharpImg} alt="C#" />
                    <p>A linguagem C# é a linguagem mais popular para a plataforma .NET, um ambiente <br />
                        de desenvolvimento gratuito, multiplataforma e de código aberto. Os programas <br />
                        C# podem ser executados em muitos dispositivos diferentes, desde dispositivos <br />
                        de Internet das Coisas (IoT) até a nuvem e todos os outros lugares.</p><br />
                    <a href="https://learn.microsoft.com/pt-br/dotnet/csharp/tour-of-csharp/overview"
                        target="_blank" rel="noopener noreferrer">Microsoft</a> <br /><br />
                    <button className="closeModal" onClick={() => closeModal()}>FECHAR</button>
                </div>
                <div className="modal modal-7">
                    <h1>SQL</h1>
                    <img src={sqlImg} alt="SQL" />
                    <p>O SQL, ou Structured Query Language, é uma linguagem de programação padrão usada <br />
                        para trabalhar com bancos de dados relacionais</p><br />
                    <a href="https://www.fm2s.com.br/blog/sql#:~:text=O%20que%20%C3%A9%20SQL?,dados%20em%20diferentes%20contextos%20profissionais."
                        target="_blank" rel="noopener noreferrer">fm2s</a> <br /><br />
                    <button className="closeModal" onClick={() => closeModal()}>FECHAR</button>
                </div>

            </div>
            <div className="habilidadesContainer">
                <div className="habilidadesItem hab-1" onClick={() => abrirModal(1)}>
                    <img src={htmlImg} alt="HTML" />
                    <p>HTML</p>
                    <p>Avançado</p>
                </div>
                <div className="habilidadesItem hab-2" onClick={() => abrirModal(2)}>
                    <img src={cssImg} alt="CSS" />
                    <p>CSS</p>
                    <p>Avançado</p>
                </div>
                <div className="habilidadesItem hab-3" onClick={() => abrirModal(3)}>
                    <img src={javascriptImg} alt="JavaScript" />
                    <p>JavaScript</p>
                    <p>Básico</p>
                </div>
                <div className="habilidadesItem hab-4" onClick={() => abrirModal(4)}>
                    <img src={reactImg} alt="React" />
                    <p>React</p>
                    <p>Básico</p>
                </div>
                <div className="habilidadesItem hab-5" onClick={() => abrirModal(5)}>
                    <img src={javaImg} alt="Java" />
                    <p>Java</p>
                    <p>Básico</p>
                </div>
                <div className="habilidadesItem hab-6" onClick={() => abrirModal(6)}>
                    <img src={cSharpImg} alt="C#" />
                    <p>C#</p>
                    <p>Básico</p>
                </div>
                <div className="habilidadesItem hab-7" onClick={() => abrirModal(7)}>
                    <img src={sqlImg} alt="SQL" />
                    <p>SQL</p>
                    <p>Básico</p>
                </div>
            </div>
        </div>
    );
}
export default Habilidades;