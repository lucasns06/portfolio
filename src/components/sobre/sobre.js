import { useLayoutEffect } from "react";
import React from 'react';
import { Link } from 'react-router-dom';
import perfilFoto from '../../img/perfil.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './sobre.css';
import '../../App.css';

const Sobre = () => {
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const texts = document.querySelectorAll('.textAnim');

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

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".sobre",
                start: "top center",
                toggleActions: "play none none none",
            },
        });

        const cards = document.querySelectorAll('.card');
        const firstThreeCards = Array.from(cards).slice(0, 3);
        const lastThreeCards = Array.from(cards).slice(3);

        timeline.fromTo(
            texts,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5 }
        );

        timeline.to(
            '.textWriting2',
            {
                text: "Lucas Nascimento",
                duration: 2,
            },
        );
        timeline.fromTo(
            firstThreeCards,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, stagger: 0.2 },
            "+=0.5"
        );

        timeline.fromTo(
            lastThreeCards,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, stagger: 0.2 },

        );

    }, []);

    return (
        <div className="sobre" id="sobreId">
            <div className="sobreContainer-meio sobre-mobile">
                <h1 className="QuemSouP textAnim">Sobre <span className="span">mim</span></h1>
                <div className="sobreContainerImg sombra">
                    <img src={perfilFoto} alt="Perfil" />
                </div> <br />
                <p className="textWriting2"></p><br /> <br />
            </div>
            <div className="sobreContainer">
                <div className="cards">
                    <div className="card">
                        <p>
                            Desde jovem, sempre fui apaixonado por desenho, música e tecnologia
                        </p>
                    </div>
                    <div className="card">
                        <p>
                            Em 2024, iniciei o curso de Técnico em Desenvolvimento de Sistemas.
                        </p>
                    </div>
                    <div className="card">
                        <p>
                            Eu Também fiz Técnico em Administração integrado ao Ensino Médio
                        </p>

                    </div>
                </div>
                <div className="sobreContainer-meio">
                    <h1 className="QuemSouP textAnim">Sobre <span className="span">mim</span></h1>
                    <div className="sobreContainerImg">
                        <img src={perfilFoto} alt="Perfil" className="sombra" />
                    </div> <br />
                    <p className="textWriting2"></p><br /> <br />
                    <Link to="/" state={{ scrollTo: 'projetosId' }} className="projetosBtn versiteBtn sombra">Ver Projetos</Link>
                </div>
                <div className="cards">
                    <div className="card">
                    <p>
                            Tenho hobbies como desenhar e tocar violão.
                        </p>
                    </div>
                    <div className="card">
                        <p>
                        Atualmente, estou em busca de novas oportunidades para aplicar meus conhecimentos e continuar evoluindo na área.
                        </p>
                    </div>
                    <div className="card">
                    <p>
                           Veja os meus projetos! :D
                        </p>
                    </div>
                </div>
            </div> <br />
            <Link to="/" state={{ scrollTo: 'projetosId' }} className="projetosBtn versiteBtn sombra btn-mobile">Ver Projetos</Link>
        </div>
    );
}

export default Sobre;
