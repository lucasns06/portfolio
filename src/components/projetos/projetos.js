import React, { useState, useEffect, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { gsap } from "gsap";
import "./projetos.css";
import "../../App.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import telaComunica from "../../img/telaComunica.png";
import telaComunitec from "../../img/telaComunitec.jpg";
import telaEstudosApi from "../../img/telaEstudosApi.jpg";
const Projetos = () => {
  useLayoutEffect(() => {
    const swiper = document.querySelectorAll(".swiper-container, .slideH1, .card_github");
    if (swiper) {
      gsap.to(swiper, {
        scrollTrigger: {
          trigger: swiper,
          toggleActions: "play none none none",
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "none",
        stagger: 0.2,
      });
    }
  });
  const slide = [
    {
      id: 0,
      classificacao: "Front-End",
      imagem: telaComunitec,
      titulo: "ComuniTec",
      texto:
        "Como parte do Trabalho de Conclusão de Curso (TCC), desenvolvi um site utilizando React.",
      texto2:
        "O objetivo principal desse site é servir como uma empresa para apresentar o meu produto.",
      github: "https://github.com/lucasns06/ComuniTec",
      link: "https://lucasns06.github.io/ComuniTec/",
    },
    {
      id: 1,
      classificacao: "Mobile",
      imagem: telaComunica,
      titulo: "Comunica",
      texto:
        "No meu TCC, estou desenvolvendo um aplicativo voltado para facilitar a comunicação de pessoas neurodivergentes não verbais, com React Native.",
      texto2:
        "O aplicativo consiste em usar a comunicação por troca de imagens, com mais algumas funcionalidades.",
      github: "https://github.com/lucasns06/Comunica",
      link: "",
    },
    {
      id: 2,
      classificacao: "Full-Stack",
      imagem: telaEstudosApi,
      titulo: "EstudosApi",
      texto:
        "A EstudosApi é uma RESTful API, criada para gerenciar tarefas associadas a categorias.",
      texto2:
        "O projeto utiliza ASP.NET Core e Entity Framework Core, conta com um banco de dados e autenticação de usuarios.",
      github: "https://github.com/lucasns06/EstudosAPI",
      link: "https://estudosapifront.azurewebsites.net",
    },
  ];
  return (
    <div className="projetos" id="projetosId">
      <h1 className="textAnim">
        Meus <span className="span">projetos</span>
      </h1>{" "}
      <br /> <br />
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        navigation
        breakpoints={{
          1400: {
            slidesPerView: 2,
          },
        }}
        pagination={{ clickable: true }}
      >
        {slide.map((item) => (
          <SwiperSlide key={item.id}>
            <a href={item.link} className="swiper-container sombra">
              <img className="cardImage" src={item.imagem} alt="back" />
              <div className="cardClass">
                <p>{item.classificacao}</p>
              </div>
              <div className="back2">
                <div className="swiper-texto">
                  <p>{item.texto}</p>
                  <p>{item.texto2}</p>
                  <br />
                  <p style={{ textAlign: "center", color: "lightgreen" }}>
                    Clique para abrir o projeto
                  </p>
                </div>
              </div>
            </a>
            <div className="slide_buttons">
              <h1 className="slideH1">{item.titulo}</h1> 
              <a
                    className="card_github"
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="64"
                      height="64"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C12.1381 15.0539 13.5182 14.0332 14.4958 12.6716C15.4735 11.3101 15.9996 9.6762 16 8C16 3.58 12.42 0 8 0Z"
                        fill="var(--cor-preta)"
                      />
                    </svg>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <br /> <br />
      <Link to="/" state={{ scrollTo: "habilidadesId" }}>
        <svg
          className="mouse"
          width="64"
          height="64"
          viewBox="0 0 256 256"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M125.485 144.768L115.703 133.589V89.9912L130.795 86.6375L142.253 94.1833V138.899L125.485 144.768Z"
            fill="var(--cor-branco)"
            stroke="black"
            className="mouse_red"
          />
          <path
            d="M138.565 64.8851H133.866C134.215 64.2132 134.471 63.4964 134.622 62.7542C135.207 54.9027 134.079 47.0197 131.317 39.6467C128.352 31.7992 123.67 24.7112 117.616 18.9027C115.821 17.0492 113.112 16.4086 110.676 17.2601C109.333 17.7914 108.305 18.9027 107.879 20.2836C107.581 21.6976 107.965 23.1703 108.918 24.2582C114.049 29.0316 117.991 34.9397 120.424 41.5122C122.917 48.2972 123.667 55.6002 122.604 62.7522C122.606 63.4846 122.755 64.2092 123.04 64.883H117.434C85.9732 64.883 60.4692 89.3421 60.4692 119.513V181.483C60.4692 213.329 87.3912 239.148 120.604 239.148H135.401C168.612 239.148 195.536 213.33 195.536 181.483V119.513C195.534 89.3451 170.03 64.883 138.571 64.883L138.565 64.8851ZM138.348 130.265C138.295 132.732 137.266 135.076 135.485 136.783C133.706 138.49 131.319 139.419 128.854 139.371H128.373C125.907 139.419 123.522 138.49 121.74 136.783C119.961 135.076 118.932 132.732 118.877 130.265V102.611C118.932 100.146 119.961 97.802 121.74 96.0951C123.522 94.3881 125.906 93.4564 128.373 93.5072H128.854C131.319 93.4564 133.705 94.3881 135.485 96.0951C137.266 97.8022 138.295 100.146 138.348 102.611V130.265Z"
            fill="var(--cor-preta)"
          />
        </svg>
      </Link>
    </div>
  );
};

export default Projetos;
