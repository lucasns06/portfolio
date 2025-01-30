import React from "react";
import { Link } from "react-router-dom";
import perfilFoto from "../../img/perfil.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./sobre.css";
import "../../App.css";
import Scroll from "../scroll";
import { useGSAP } from "@gsap/react";

const Sobre = () => {
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const texts = document.querySelectorAll(".textAnim");
    const sobreH1 = document.querySelectorAll(".sobre_h1 > h1");
    const sobreTextos = document.querySelectorAll(".sobre-texto p");
    const tech = document.querySelector(".tech");
    const techBefore = document.querySelector(".techAnima");

    texts.forEach((Anima) => {
      gsap.fromTo(
        Anima,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: Anima,
            toggleActions: "play none none none",
          },
        }
      );
    });
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: tech,
        toggleActions: "play none none none",
      },
    });
    tl.fromTo(
      sobreH1,
      { opacity: 0, x: 80 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        stagger: 0.3,
      }
    )
      .fromTo(
        sobreTextos,
        { opacity: 0, y: 80 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
        }
      )
      .to(techBefore, {
        ease: "power4.inOut",
        width: "100%",
        duration: 2.5,
      }).fromTo('.linhas',{
        width: 0
      },{
        width:'10vw'
      }).to('.sobreContainer',{
        borderColor: 'var(--cor-destaque)'
      })
  }, []);
  return (
    <div className="sobre" id="sobreId">
      <h1 className="QuemSouP textAnim">
        Explorando o Mundo da{" "}
        <span className="span tech">
          Tecnologia<span className="techAnima"></span>
        </span>
      </h1>
      <div className="sobreContainer">
        <svg
          className="linhas"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line y1="55" x2="64" y2="55" stroke="var(--cor-destaque)" stroke-width="2" />
          <line
            x1="48"
            y1="100"
            x2="48"
            y2="54"
            stroke="#009DFF"
            stroke-width="2"
          />
          <line
            x1="63"
            y1="54"
            x2="63"
            y2="18"
            stroke="#009DFF"
            stroke-width="2"
          />
          <line x1="93" y1="36" x2="93" stroke="#009DFF" stroke-width="2" />
          <line
            x1="64"
            y1="36"
            x2="100"
            y2="36"
            stroke="#009DFF"
            stroke-width="2"
          />
        </svg>
        <svg
          className="linhas linha1"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line y1="55" x2="64" y2="55" stroke="var(--cor-destaque)" stroke-width="2" />
          <line
            x1="48"
            y1="100"
            x2="48"
            y2="54"
            stroke="#009DFF"
            stroke-width="2"
          />
          <line
            x1="63"
            y1="54"
            x2="63"
            y2="18"
            stroke="#009DFF"
            stroke-width="2"
          />
          <line x1="93" y1="36" x2="93" stroke="#009DFF" stroke-width="2" />
          <line
            x1="64"
            y1="36"
            x2="100"
            y2="36"
            stroke="#009DFF"
            stroke-width="2"
          />
        </svg>
        <div className="starContainer">
          <div className="sobreContainerImgContainer">
            <img src={perfilFoto} alt="Perfil" className="sombra" />
          </div>
          <img
            className="stars star1"
            src="https://i.gifer.com/XiPv.gif"
            alt="starsGif"
          />
          <img
            className="stars star2"
            src="https://i.gifer.com/XiPv.gif"
            alt="starsGif"
          />
        </div>
        <div className="sobre-texto">
          <div className="sobre_h1">
            <h1 className="span">Lucas</h1>
            <h1 className="span">Nascimento</h1>
            <h1 className="span">Santana</h1>
          </div>
          <br />
          <p>
            💻 Minha jornada no mundo da programação começou com o curso técnico
            em desenvolvimento de sistemas.
          </p>{" "}
          <br />
          <p>
            🚀 Tenho um grande interesse em desenvolvimento web, criando
            interfaces intuitivas e experiências envolventes. Além disso, também
            sou back-end.
          </p>
          <br />
          <p>
            🌟 Estou sempre em busca de novos desafios e oportunidades para
            aprender e crescer.
          </p>
        </div>
      </div>
      <br /> <br />
      <Link
        className="mouse__container"
        to="/"
        state={{ scrollTo: "projetosId" }}
      >
        <Scroll />
      </Link>
    </div>
  );
};

export default Sobre;
