import { useLayoutEffect, useRef } from "react";
import React from "react";
import homeImage from '../../img/User Interface.gif';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from "gsap/TextPlugin";
import { Link } from 'react-router-dom';
import './home.css'
import '../../App.css';
const Home = () => {

    const saberBtn = useRef();
    useLayoutEffect(() => {
        const animTextHome = document.querySelector('.animTextHome')
        const textHome = document.querySelector('.textAnim2')
        const homeP = document.querySelector('.homeMain > p')

        gsap.registerPlugin(TextPlugin);
        gsap.registerPlugin(ScrollTrigger);
        setTimeout(() => {
            gsap.to(".textWriting", {
                duration: 4,
                text: "Sou um estudante de Desenvolvimento de Sistemas e estou procurando uma oportunidade de trabalho e aprendizado."
            });
        }, 1500)


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
        const saberBotao = saberBtn.current;
        saberBotao.style.opacity = 0;

        setTimeout(() => {
            gsap.to(saberBotao,
                {
                    opacity: 1,
                    duration: 2,
                })
        }, 5500)
    }, []);

    return (
        <div className="homeMain" id="homeId">
            <div className="home">
                <div className="home-texto">
                    <h1 className="nomeHome textAnim2">Olá, eu sou <span className="span">Lucas</span> <br />
                        <p className="animTextHome">Desenvolvedor de Software</p>
                    </h1>
                    <p className="textWriting"></p>  <br /> <br />
                    <Link to="/" state={{ scrollTo: 'sobreId' }} ><button className='projetosBtn versiteBtn sombra' ref={saberBtn}>Saber Mais</button></Link>
                </div>
                <img src={homeImage} className="homeImg sombra" alt="HomeImg" />
            </div>
            <p>“A persistência é o caminho do êxito” <strong>--Charles Chaplin</strong></p>
        </div>
    );
}

export default Home;
