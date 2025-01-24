import { useLayoutEffect } from "react";
import React from 'react';
import { Link } from 'react-router-dom';
import perfilFoto from '../../img/perfil.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ParticlesComponent from '../particles'
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
        const sobreTextos = document.querySelectorAll('.sobre-texto p');
        const sobreContainerImg = document.querySelectorAll('.sobreContainerImg');
        setTimeout(() => {
            gsap.to(
                sobreContainerImg,
                {
                    opacity: 1,
                    duration: 2
                })
            if (sobreTextos) {
                gsap.fromTo(
                    sobreTextos,
                    { y: 80, },
                    {
                        scrollTrigger: {
                            trigger: sobreTextos,
                            toggleActions: "restart none none none"
                        },
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        stagger: 0.8
                    },
                );
            }
        }, 1000)




    }, []);

    return (
        <div className="sobre" id="sobreId">
            <h1 className="QuemSouP textAnim">Explorando o Mundo da  <span className="span">Tecnologia</span></h1>
            <div className="sobreContainer">
                <div>
                    <div className="sobreContainerImg">
                        <img src={perfilFoto} alt="Perfil" className="sombra" />
                    </div>
                </div>
                <div className="sobre-texto">
                    <p>👨‍💻 Me chamo Lucas Nascimento Santana, e eu sempre gostei de tecnologia.</p> <br />
                    <p>💻 Minha jornada no mundo da programação começou com o curso técnico em desenvolvimento de sistemas.</p> <br />
                    <p>🚀 Tenho um grande interesse em desenvolvimento web, criando interfaces intuitivas e experiências envolventes. Além disso, também sou back-end.</p>
                </div>
            </div>
        </div>
    );
}

export default Sobre;
