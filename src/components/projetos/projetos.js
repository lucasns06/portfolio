import React, { useEffect, useLayoutEffect } from "react";
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
import telaComunitec from "../../img/telaComunitec.jpg";
import telaEstudosApi from "../../img/telaEstudosApi.jpg";
import telaSpotify from "../../img/telaSpotify.jpg";
import telaLucasTube from "../../img/telaLucasTube.jpg";
import Scroll from "../scroll";
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
        "Site da 'empresa' do meu TCC",
      texto2:
        "É uma Landing Page para o meu aplicativo desenvolvido no TCC",
      github: "https://github.com/lucasns06/ComuniTec",
      link: "https://lucasns06.github.io/ComuniTec/",
    },
    {
      id: 1,
      classificacao: "Front End",
      imagem: telaLucasTube,
      titulo: "LucasTube",
      texto:
        "Este projeto é uma recriação do youtube, responsivo com pagina de videos dinâmicas, feito com nextjs.",
      texto2:
        "",
      github: "https://github.com/lucasns06/lucastube",
      link: "https://lucastube.vercel.app",
    },
    {
      id: 2,
      classificacao: "Front End",
      imagem: telaSpotify,
      titulo: "Spotify",
      texto:
        "Este projeto é uma recriação da pagina de buscar do spotify, contendo uma funcionalidade de buscar artistas.",
      texto2:
        "Feito na imersão alura 2º edição.",
      github: "https://github.com/lucasns06/spotify-imersao-alura",
      link: "https://spotify-imersao-alura-sigma.vercel.app",
    },
    {
      id: 3,
      classificacao: "Full-Stack",
      imagem: telaEstudosApi,
      titulo: "EstudosApi",
      texto:
        "A EstudosApi é um site que consome minha API de estudos restful",
      texto2:
        "O projeto utiliza Reactjs, Axios e Gsap",
      github: "https://github.com/lucasns06/EstudosAPI-FrontV2",
      link: "https://estudosapi-lucasns06.vercel.app",
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
        // spaceBetween={50}
        navigation
        breakpoints={{
          1600: {
            slidesPerView: 2,
          },
          1800: {
            slidesPerView: 3,
          }
        }}
        pagination={{ clickable: true }}
      >
        {slide.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="card sombra swiper-container" >
              <div className="imageContainer">
                <img className="zoio" src={item.imagem} alt="back" />
                <p className="class sombra">{item.classificacao}</p>
              </div>
              <div className="cardTexto">
                <h1>{item.titulo}</h1>
                <br />
                <p>{item.texto}</p>
                <p>{item.texto2}</p>
                <br />
                <br />
                <div className="buttonsContainer">
                  <a href={item.link} className="projetosBtn">Ver Projeto</a>

                  <a href={item.github} className="projetosBtn githubBtn">Github</a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <br /> <br />
      <Link className="mouse__container" to="/" state={{ scrollTo: "habilidadesId" }}>
        <Scroll />
      </Link>
    </div>
  );
};

export default Projetos;
