import { useLayoutEffect, useRef } from "react";
import React from "react";
import homeImage from '../../img/User Interface.gif';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from "gsap/TextPlugin";
import './home.css'
import '../../App.css';
const Home = () => {

    useLayoutEffect(() => {
        const animTextHome = document.querySelector('.animTextHome')
        const textHome = document.querySelector('.textAnim2')
        const homeP = document.querySelector('.homeMain > p')

        gsap.registerPlugin(TextPlugin);
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".textWriting", { duration: 4, text: "Sou um estudante de Desenvolvimento de Sistemas e estou procurando uma oportunidade de trabalho e aprendizado." });

        gsap.fromTo(textHome, {
            opacity: 0,
            x: -0,
        },
            {
                opacity: 1,
                y: 0,
                duration: 2
            });

        gsap.fromTo(animTextHome, {
            opacity: 0,
            x: -20,
        },
            {
                x: 0,
                opacity: 1,
                duration: 4
            });
            gsap.fromTo(homeP, {
                opacity: 0,
            }, {
                opacity: 1,
                duration: 2,
                scrollTrigger: {
                        trigger: homeP,
                        start: 'top 50%',
                }
            })
            
    }, []);

    return (
        <div className="homeMain" id="homeId">
            <div className="home">
                <img src={homeImage} className="homeImg" alt="HomeImg" />
                <div className="home-texto">
                    <h1 className="nomeHome textAnim2">Olá, eu sou <span className="span">Lucas</span> <br />
                        <p className="animTextHome">Desenvolvedor de Software</p>
                    </h1>
                    <p className="textWriting"></p>
                </div>
            </div> 
            <p>“A persistência é o caminho do êxito” <strong>--Charles Chaplin</strong></p>
        </div>
    );
}

export default Home;
