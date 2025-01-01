import { useLayoutEffect, useState } from "react";
import React from "react";
import './habilidades.css';
import '../../App.css';
import htmlImg from '../../img/hab/html.png';
import cssImg from '../../img/hab/css.png';
import javascriptImg from '../../img/hab/javascript.png';
import javaImg from '../../img/hab/java.png';
import netImg from '../../img/hab/dotnet.png';
import sqlImg from '../../img/hab/sql.png';
import reactImg from '../../img/hab/react.png';
import figmaImg from '../../img/hab/figma.png';
import springImg from '../../img/hab/spring.png';
import nextimg from '../../img/hab/nextjs.svg';
import gsapImg from '../../img/hab/gsap.webp';
import TailwindImg from '../../img/hab/tailwind.png';


import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Modal from 'react-modal';

const Habilidades = () => {
    const texts = document.querySelectorAll('.textAnim');
    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        texts.forEach(Anima => {
            gsap.fromTo(
                Anima,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    scrollTrigger: {
                        trigger: Anima,
                        toggleActions: "restart none none none"
                    }
                }
            );
        });
        const habilidadesItem = document.querySelectorAll('.habilidadesItem');
        if (habilidadesItem) {
            gsap.fromTo(
                habilidadesItem,
                { y: 80, },
                {
                    scrollTrigger: {
                        trigger: habilidadesItem,
                        toggleActions: "play none none none"
                    },
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'expo.out',
                    stagger: 0.2
                },
            );
        }

    }, []);
    const habFront = [
        {
            id: 0,
            image: htmlImg,
            titulo: 'HTML',
            desc: 'Linguagem de marcação para estruturar páginas web.'
        },
        {
            id: 1,
            image: cssImg,
            titulo: 'CSS',
            desc: 'Linguagem para estilizar páginas web.'
        },
        {
            id: 2,
            image: javascriptImg,
            titulo: 'JavaScript',
            desc: 'Linguagem de programação para interatividade web.'
        },
        {
            id: 3,
            image: figmaImg,
            titulo: 'Figma',
            desc: 'Ferramenta para design de interfaces e prototipagem.'
        },
        {
            id: 4,
            image: nextimg,
            titulo: 'Next.js',
            desc: 'Next.js é uma estrutura da web de desenvolvimento front-end React de código aberto criada por Vercel que permite funcionalidades como renderização do lado do servidor'
        },
        {
            id: 5,
            image: reactImg,
            titulo: 'React',
            desc: 'Biblioteca JavaScript para criar interfaces de usuário.'
        },
        {
            id: 6,
            image: reactImg,
            titulo: 'React Native',
            desc: 'Framework para desenvolvimento mobile multiplataforma.'
        },
        {
            id: 7,
            image: gsapImg,
            titulo: 'GSAP',
            desc: 'GSAP é uma biblioteca de animação JavaScript da GreenSock que permite criar animações de alto desempenho.'
        },
        {
            id: 8,
            image: TailwindImg,
            titulo: 'Tailwind',
            desc: 'Tailwind CSS é um conjunto de classes prontas para estilização de elementos.'
        },
    ]
    const habBack = [
        {
            id: 0,
            image: javaImg,
            titulo: 'Java',
            desc: 'Linguagem de programação orientada a objetos.'
        },
        {
            id: 1,
            image: springImg,
            titulo: 'SpringBoot',
            desc: 'Framework para desenvolvimento de aplicações Java.'
        },
        {
            id: 2,
            image: sqlImg,
            titulo: 'SQL',
            desc: 'Linguagem para gerenciar bancos de dados relacionais.'
        },
        {
            id: 3,
            image: netImg,
            titulo: 'ASP NET',
            desc: 'Framework para criar aplicações web no ecossistema .NET.'
        },
    ];

    const modalEstilo = {
        content: {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: 'max-content',
            width: '90%',
            height: 'max-content',
            background: 0,
            border: 0,
            borderRadius: 10,
            boxShadow: 24,
            margin: 0,
            padding: 0
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 12,
        }
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
            <h1 className="MinhasHab textAnim">Minhas <span className="span">habilidades</span></h1><br />
            <h2>Clique nos modais para saber mais.</h2> <br /><br />
            <h2>Front End</h2> <br /><br />
            <div className="habilidadesContainer">
                {habFront.map((item) => (
                    <div className="habilidadesItem sombra" onClick={() => openModal(item)} key={item.id}>
                        <img src={item.image} alt={item.titulo} />
                        <p>{item.titulo}</p>
                    </div>
                ))}
            </div> <br /><br />
            <h2>Back End</h2><br /><br />
            <div className="habilidadesContainer">
                {habBack.map((item) => (
                    <div className="habilidadesItem sombra" onClick={() => openModal(item)} key={item.id}>
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
                    ariaHideApp={false} >
                    <div className="modal" >
                        <h2>{selectedItem.titulo}</h2>
                        <img src={selectedItem.image} /> <br />
                        <p>{selectedItem.desc}</p> <br />
                        <button className="closeModal" onClick={closeModal}>Fechar</button>
                    </div>
                </Modal>
            )}

        </div>
    );
}

export default Habilidades;
