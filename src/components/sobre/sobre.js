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
                            toggleActions: "play none none none"
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
            <h1 className="QuemSouP textAnim">Sobre <span className="span">mim</span></h1>
            <div className="sobreContainer">
                <div>
                    <div className="sobreContainerImg">
                        <img src={perfilFoto} alt="Perfil" className="sombra" />
                    </div>
                </div>
                <div className="sobre-texto">
                    <p>Me chamo Lucas Nascimento, e eu sempre gostei de tecnologia.</p> <br />
                    <p>Entrei no mundo da programação com técnico em desenvolvimento de sistemas.</p> <br />
                    <p>Atualmente sou Full Stack e estou procurando oportunidade na área.</p>
                </div>
            </div>
        </div>
    );
}

export default Sobre;
