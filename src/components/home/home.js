import { useEffect, useLayoutEffect, useRef, useState } from "react";
import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { Link } from "react-router-dom";
import ParticlesComponent from "../particles";
import { ReactTyped } from "react-typed";
import "./home.css";
import "../../App.css";
const Home = ({ isDarkTheme }) => {
  const saberBtn = useRef();

  useLayoutEffect(() => {
    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(ScrollTrigger);

    const animTextHome = document.querySelector(".animTextHome");
    const textHome = document.querySelector(".textAnim2");
    const saberBotao = saberBtn.current;

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
        duration: 4,
        text: "Sou um Desenvolvedor FullStack Júnior. <br/> Estou procurando uma oportunidade de trabalho e aprendizado.",
      })
      .to(saberBotao, {
        opacity: 1,
        display: "inline",
        duration: 2,
      })
      .to(animTextHome, {
        x: 0,
        opacity: 1,
        duration: 4,
      });
  }, []);

  return (
    <div
      className={`homeMain ${
        isDarkTheme ? "backgroundBlack" : "backgroundWhite"
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
