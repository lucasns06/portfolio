import { useRef } from "react";
import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { Link } from "react-router-dom";
import ParticlesComponent from "../particles";
import { ReactTyped } from "react-typed";
import "./home.css";
import "../../App.css";
import { useGSAP } from '@gsap/react';
import { useTheme } from "../themeContext";

const Home = () => {
  const { isDarkTheme } = useTheme();
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(TextPlugin);
  gsap.registerPlugin(ScrollTrigger);
  const saberBtn = useRef();

  useGSAP(() => {

    const animTextHome = document.querySelector(".animTextHome");
    const textHome = document.querySelector(".textAnim2");
    const saberBotao = saberBtn.current;
    const particulas = document.getElementById('tsparticles')
    var tl = gsap.timeline();

    tl.fromTo(
      textHome,
      {
        opacity: 0,
        y: -40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 2,
      }
    )
      .to(".textWriting", {
        duration: 2,
        text: "React - TailwindCSS - ASPNET",
      })
      .to(saberBotao, {
        opacity: 1,
        display: "inline",
        duration: 1,
      })
      .to(animTextHome, {
        x: 0,
        opacity: 1,
        duration: 2,
      }).fromTo("span",
        { filter: "brightness(1)" },
        {
          filter: "brightness(2)",
          duration: 1,
          yoyo: true,
          repeat: 1,
          ease: "power4.inOut",
          onComplete: () => gsap.set(".span", { clearProps: "filter" })
        }).to(particulas, {
          opacity: 1,
        })
  }, []);

  return (
    <div
      className={`homeMain ${isDarkTheme ? "backgroundBlack" : "backgroundWhite"
        }`}
      id="homeId"
    >
      <div className="home">
        <div className="home-texto">
          <h1 className="nomeHome textAnim2">
            Olá, eu sou <span className="span">Lucas</span> <br />
            <p className="animTextHome">
              <ReactTyped
                strings={["Desenvolvedor Full Stack", "Desenvolvedor Júnior"]}
                typeSpeed={40}
                backSpeed={50}
                loop
              ></ReactTyped>
            </p>
          </h1>
          <p className="textWriting"></p> <br /> <br />
          <Link to="/" state={{ scrollTo: "sobreId" }}>
            <button
              className="projetosBtn versiteBtn sombra saberBtn"
              ref={saberBtn}
            >
              Saber Mais
            </button>
          </Link>
        </div>
      </div>
      <ParticlesComponent id="tsparticles" />
    </div>
  );
};

export default Home;
