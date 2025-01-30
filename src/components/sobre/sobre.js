import { useLayoutEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";
import perfilFoto from "../../img/perfil.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./sobre.css";
import "../../App.css";
import Scroll from "../scroll";

const Sobre = () => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const texts = document.querySelectorAll(".textAnim");

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
            toggleActions: "restart none none none",
          },
        }
      );
    });
    const sobreH1 = document.querySelectorAll('.sobre_h1 > h1')
    gsap.fromTo(
      sobreH1,
      { opacity: 0, x: 80 },
      {
        scrollTrigger: {
          trigger: sobreH1,
          toggleActions: "restart none none none",
        },
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power4.out',
        stagger: 0.3,
      }
    );

    const sobreTextos = document.querySelectorAll(".sobre-texto p");
    const sobreContainerImg = document.querySelectorAll(".sobreContainerImgContainer");
    setTimeout(() => {
      gsap.to(sobreContainerImg, {
        opacity: 1,
        duration: 2,
      });
      if (sobreTextos) {
        gsap.fromTo(
          sobreTextos,
          { opacity: 0, y: 80 },
          {
            scrollTrigger: {
              trigger: sobreTextos,
              toggleActions: "restart none none none",
            },
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
          }
        );
      }
    }, 1000);

    const tech = document.querySelector('.tech')
    const techBefore = document.querySelector('.techAnima')

    setTimeout(()=>{
      gsap.to(techBefore, {
        scrollTrigger:{
          trigger: tech,
          toggleActions: "play none none none",
        },
        ease: "power4.inOut",
        width: '100%',
        duration: 2.5,
      })
    }, 1500)

    const mouses = document.querySelectorAll(".mouse");
  
    if(mouses) {
      mouses.forEach((mouse) =>{
          gsap.fromTo(mouse, 
          { opacity: 0, y: 80  },
          {
              scrollTrigger: {
                  trigger: mouse,
                  toggleActions: "play none none none",
              },
              y: 0,
              opacity: 1,
              duration: 1,
              clearProps: 'all'
          })
  
      })
    }
  }, []);
  return (
    <div className="sobre" id="sobreId">
      <h1 className="QuemSouP textAnim">
        Explorando o Mundo da <span className="span tech">Tecnologia<span className="techAnima"></span></span>
      </h1>
      <div className="sobreContainer">
        <div className="starContainer">
          <div className="sobreContainerImgContainer">
            <img src={perfilFoto} alt="Perfil" className="sombra" />
          </div>
          <img className="stars star1" src="https://i.gifer.com/XiPv.gif" alt="starsGif" />
          <img className="stars star2" src="https://i.gifer.com/XiPv.gif" alt="starsGif" />
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
          <p>🌟 Estou sempre em busca de novos desafios e oportunidades para aprender e crescer. 
          </p>
        </div>
      </div>
      <br /> <br />
      <Link className="mouse__container" to="/" state={{ scrollTo: "projetosId" }}>
        <Scroll />
      </Link>
    </div>
  );
};

export default Sobre;
