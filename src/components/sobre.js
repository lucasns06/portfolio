import { useLayoutEffect } from "react";
import React from 'react';
import perfilFoto from '../img/perfil.jfif'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import { animation } from '../js/animations'

const Sobre = () => {
    useLayoutEffect(() => {
        const texts = document.querySelectorAll('.textAnim')
        gsap.registerPlugin(ScrollTrigger)

        texts.forEach(Anima => {
            gsap.fromTo(
                Anima,
                { y: 100, opacity: 0 }, // Estado inicial
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

        gsap.to('.textWriting2', {
            scrollTrigger: {
                trigger: ".textWriting2",
                toggleActions: "play none none reverse"
            },
            text: "Lucas Nascimento",
            duration: 2
        });

    }, [])



    return (
        <div className="sobre" id="sobreId">
            <p className="QuemSouP textAnim">Quem sou <span className="span">eu?</span></p> <br/> <br/>
            <div className="sobreContainer">
                <div className="sobreContainer-texto">
                    <p className="textWriting2"></p>
                    <p>Sou Lucas, estudante de Desenvolvimento de Sistemas em Guarulhos, SP. Desde cedo, sempre fui
                    fascinado por tecnologia.
                    Tenho 18 anos, gosto de desenhar e também faço Técnico em Administração. <br/> <br/>
                    Estou em busca de oportunidades.</p>
                </div>
                <div className="sobreContainerImg">
                    <img src={perfilFoto} alt="Perfil" />
                </div>
            </div>
        </div>
    );
}
export default Sobre;