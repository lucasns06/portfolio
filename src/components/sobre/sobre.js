import { useLayoutEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";
import perfilFoto from "../../img/perfil.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./sobre.css";
import "../../App.css";

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
          <p>
            👨‍💻 Me chamo <span className="span">Lucas Nascimento Santana</span>, e eu sempre gostei de
            tecnologia.
          </p>
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
        </div>
      </div>
      <br /> <br />
      <Link to="/" state={{ scrollTo: "projetosId" }}>
        <svg className="mouse"
          width="64"
          height="64"
          viewBox="0 0 256 256"
          fill="none"
          xmlns="http://www.w3.org/2000/svg" >
          <path
            d="M125.485 144.768L115.703 133.589V89.9912L130.795 86.6375L142.253 94.1833V138.899L125.485 144.768Z"
            fill="var(--cor-branco)"
            stroke="black"
            className="mouse_red"  />
          <path
            d="M138.565 64.8851H133.866C134.215 64.2132 134.471 63.4964 134.622 62.7542C135.207 54.9027 134.079 47.0197 131.317 39.6467C128.352 31.7992 123.67 24.7112 117.616 18.9027C115.821 17.0492 113.112 16.4086 110.676 17.2601C109.333 17.7914 108.305 18.9027 107.879 20.2836C107.581 21.6976 107.965 23.1703 108.918 24.2582C114.049 29.0316 117.991 34.9397 120.424 41.5122C122.917 48.2972 123.667 55.6002 122.604 62.7522C122.606 63.4846 122.755 64.2092 123.04 64.883H117.434C85.9732 64.883 60.4692 89.3421 60.4692 119.513V181.483C60.4692 213.329 87.3912 239.148 120.604 239.148H135.401C168.612 239.148 195.536 213.33 195.536 181.483V119.513C195.534 89.3451 170.03 64.883 138.571 64.883L138.565 64.8851ZM138.348 130.265C138.295 132.732 137.266 135.076 135.485 136.783C133.706 138.49 131.319 139.419 128.854 139.371H128.373C125.907 139.419 123.522 138.49 121.74 136.783C119.961 135.076 118.932 132.732 118.877 130.265V102.611C118.932 100.146 119.961 97.802 121.74 96.0951C123.522 94.3881 125.906 93.4564 128.373 93.5072H128.854C131.319 93.4564 133.705 94.3881 135.485 96.0951C137.266 97.8022 138.295 100.146 138.348 102.611V130.265Z"
            fill="var(--cor-preta)"  />
        </svg>
      </Link>
    </div>
  );
};

export default Sobre;
