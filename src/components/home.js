import { useLayoutEffect } from "react";
import React from "react";
import homeImage from '../img/User Interface.gif';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from "gsap/TextPlugin";

const Home = () => {

    useLayoutEffect(() => {
        const textHome = document.querySelector('.textAnim2')
        gsap.registerPlugin(TextPlugin);

        gsap.to(".textWriting", { duration: 4, text: "Sou Desenvolvedor Front End e Designer. Moro em São Paulo, apaixonado por tecnologia e programação." }); 
        gsap.registerPlugin(ScrollTrigger)
    
        gsap.to(textHome, {
            scrollTrigger: {
                trigger: textHome,
                toggleActions: "restart none none none"
            },
            opacity: 1,
            y: 0,
            duration: 2
        });
    
    }, []);


    return (
        <div className="home" id="homeId">
            <img src={homeImage} className="homeImg" alt="HomeImg" />
            <div className="home-texto">
                <h1 className="nomeHome textAnim2">Olá, eu sou <span className="span">Lucas</span></h1>
                <p className="textWriting"></p>
            </div>
        </div>
    );
}

export default Home;
