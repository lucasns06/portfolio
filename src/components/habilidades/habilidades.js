import { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import "./habilidades.css";
import "../../App.css";
import htmlImg from "../../img/hab/html.png";
import cssImg from "../../img/hab/css.png";
import javascriptImg from "../../img/hab/javascript.png";
import javaImg from "../../img/hab/java.png";
import netImg from "../../img/hab/dotnet.png";
import sqlImg from "../../img/hab/sql.png";
import reactImg from "../../img/hab/react.png";
import figmaImg from "../../img/hab/figma.png";
import springImg from "../../img/hab/spring.png";
import nextimg from "../../img/hab/nextjs.svg";
import gsapImg from "../../img/hab/gsap.webp";
import TailwindImg from "../../img/hab/tailwind.png";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Modal from "react-modal";

const Habilidades = () => {
  const texts = document.querySelectorAll(".textAnim");
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
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
    const habilidadesItem = document.querySelectorAll(".habilidadesItem");
    if (habilidadesItem) {
      gsap.fromTo(
        habilidadesItem,
        { y: 80 },
        {
          scrollTrigger: {
            trigger: habilidadesItem,
            toggleActions: "play none none none",
          },
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "expo.out",
          stagger: 0.2,
        }
      );
    }
  }, []);
  const habFront = [
    {
      id: 0,
      image: htmlImg,
      titulo: "HTML",
      desc: "Linguagem de marcação para estruturar páginas web.",
    },
    {
      id: 1,
      image: cssImg,
      titulo: "CSS",
      desc: "Linguagem para estilizar páginas web.",
    },
    {
      id: 2,
      image: javascriptImg,
      titulo: "JavaScript",
      desc: "Linguagem de programação para interatividade web.",
    },
    {
      id: 3,
      image: figmaImg,
      titulo: "Figma",
      desc: "Ferramenta para design de interfaces e prototipagem.",
    },
    {
      id: 4,
      image: nextimg,
      titulo: "Next.js",
      desc: "Next.js é uma estrutura da web de desenvolvimento front-end React de código aberto criada por Vercel que permite funcionalidades como renderização do lado do servidor",
    },
    {
      id: 5,
      image: reactImg,
      titulo: "React",
      desc: "Biblioteca JavaScript para criar interfaces de usuário.",
    },
    {
      id: 6,
      image: reactImg,
      titulo: "React Native",
      desc: "Framework para desenvolvimento mobile multiplataforma.",
    },
    {
      id: 7,
      image: gsapImg,
      titulo: "GSAP",
      desc: "GSAP é uma biblioteca de animação JavaScript da GreenSock que permite criar animações de alto desempenho.",
    },
    {
      id: 8,
      image: TailwindImg,
      titulo: "Tailwind",
      desc: "Tailwind CSS é um conjunto de classes prontas para estilização de elementos.",
    },
  ];
  const habBack = [
    {
      id: 0,
      image: javaImg,
      titulo: "Java",
      desc: "Linguagem de programação orientada a objetos.",
    },
    {
      id: 1,
      image: springImg,
      titulo: "SpringBoot",
      desc: "Framework para desenvolvimento de aplicações Java.",
    },
    {
      id: 2,
      image: sqlImg,
      titulo: "SQL",
      desc: "Linguagem para gerenciar bancos de dados relacionais.",
    },
    {
      id: 3,
      image: netImg,
      titulo: "ASP NET",
      desc: "Framework para criar aplicações web no ecossistema .NET.",
    },
  ];

  const modalEstilo = {
    content: {
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      maxWidth: "max-content",
      width: "90%",
      height: "max-content",
      background: 0,
      border: 0,
      borderRadius: 10,
      boxShadow: 24,
      margin: 0,
      padding: 0,
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      zIndex: 12,
    },
  };

  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  function openModal(item) {
    setSelectedItem(item);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setSelectedItem(null);
  }
  return (
    <div className="habilidades" id="habilidadesId">
      <h1 className="MinhasHab textAnim">
        Minhas <span className="span">habilidades</span>
      </h1>
      <br />
      <h2>Clique nos modais para saber mais.</h2> <br />
      <br />
      <h2>Front End</h2> <br />
      <br />
      <div className="habilidadesContainer">
        {habFront.map((item) => (
          <div
            className="habilidadesItem sombra"
            onClick={() => openModal(item)}
            key={item.id}
          >
            <img src={item.image} alt={item.titulo} />
            <p>{item.titulo}</p>
          </div>
        ))}
      </div>{" "}
      <br />
      <br />
      <h2>Back End</h2>
      <br />
      <br />
      <div className="habilidadesContainer">
        {habBack.map((item) => (
          <div
            className="habilidadesItem sombra"
            onClick={() => openModal(item)}
            key={item.id}
          >
            <img src={item.image} alt={item.titulo} />
            <p>{item.titulo}</p>
          </div>
        ))}
      </div>
      {selectedItem && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={modalEstilo}
          ariaHideApp={false}
        >
          <div className="modal">
            <h2>{selectedItem.titulo}</h2>
            <img src={selectedItem.image} alt={selectedItem.titulo} /> <br />
            <p>{selectedItem.desc}</p> <br />
            <button className="closeModal" onClick={closeModal}>
              Fechar
            </button>
          </div>
        </Modal>
      )}
      <br /> <br />
      <Link to="/" state={{ scrollTo: "contatosId" }}>
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

export default Habilidades;
