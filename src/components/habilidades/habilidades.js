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

        const habilidadesContainer = document.querySelector('.habilidadesContainer');
        if (habilidadesContainer) {
            gsap.to(habilidadesContainer, {
                scrollTrigger: {
                    trigger: habilidadesContainer,
                    toggleActions: "restart none none none"
                },
                opacity: 1,
                duration: 2
            });
        }
    }, []);

    const habItem = [
        {
            id: 0,
            image: htmlImg,
            titulo: 'HTML',
            texto: "Avançado",
            desc: [
                {
                   li: 'Semântica'
                },
                {
                    li: 'Formulários'
                },
                {
                    li: 'Tabelas'
                },
                {
                    li: 'Videos e Audios'
                },
                
            ]
        },
        {
            id: 1,
            image: cssImg,
            titulo: 'CSS',
            texto: 'Avançado',
            desc: [
                {
                   li: 'Seletores'
                },
                {
                    li: 'Responsividade'
                },
                {
                    li: 'Animações'
                },
                {
                    li: 'Variáveis'
                },
                {
                    li: 'Pseudo-Elementos'
                },
            ]
        },
        {
            id: 2,
            image: javascriptImg,
            titulo: 'JavaScript',
            texto: 'Básico',
            desc: [
                {
                   li: 'Variáveis'
                },
                {
                    li: 'Funções'
                },
                {
                    li: 'Tipos de dados'
                },
                {
                    li: 'DOM'
                },
            ]
        },
        {
            id: 3,
            image: reactImg,
            titulo: 'React',
            texto: 'Básico',
            desc: [
                {
                   li: 'Hooks Básicos'
                },
                {
                    li: 'Componentes'
                },
                {
                    li: 'Rotas'
                },
                {
                    li: 'Modais'
                },
            ]           
        },
        {
            id: 4,
            image: reactImg,
            titulo: 'React Native',
            texto: 'Básico',
            desc: [
                {
                   li: 'StyleSheet'
                },
                {
                    li: 'Componentes Nativos'
                },
                {
                    li: 'React Navigation'
                },
            ]           
        },
        {
            id: 5,
            image: javaImg,
            titulo: 'Java',
            texto: 'Básico',
            desc: [
                { li: 'Classe, atributo e objeto' },
                { li: 'Enumeração' },
                { li: 'Herança' },
                { li: 'Construtores' },
                { li: 'Modificadores de acesso' },
                { li: 'Polimorfismo' },
                { li: 'Interfaces' },
                { li: 'Classe Abstrata e métodos abstratos' }
            ]           
        },
        {
            id: 6,
            image: sqlImg,
            titulo: 'SQL',
            texto: 'Básico',
            desc: [
                { li: 'Data Manipulation Language' },
                { li: 'Filtragem de Dados (WHERE, LIKE, BETWEEN, IN)' },
                { li: 'Funções de Agregação (COUNT, AVG, SUM, MAX, MIN)' },
                { li: 'Joins (INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN)' },
                { li: 'SubQuery' },
                { li: 'Ordenação e Agrupamento de Dados (ORDER BY, GROUP BY)' },
                { li: 'Relacionamentos entre Tabelas (Chaves Primárias e Estrangeiras)' },
            ]           
        },
        {
            id: 7,
            image: netImg,
            titulo: 'ASP NET',
            texto: 'Básico',
            desc: [
                { li: 'API Restful' },
                { li: 'Aplicativos Web' },
            ]           
        }
    ];

    const modalEstilo = {
        content: {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: 'max-content',
            width: '90%',
            height: 'max-content',
            bgcolor: 'black',
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

            <div className="habilidadesContainer">
                {habItem.map((item) => (
                    <div className="habilidadesItem sombra" onClick={() => openModal(item)} key={item.id}>
                        <img src={item.image} alt={item.titulo} />
                        <p>{item.titulo}</p>
                        <p>{item.texto}</p>
                    </div>
                ))}
            </div>

            {selectedItem &&  (
                <Modal  
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={modalEstilo}
                    ariaHideApp={false} >
                    <div className="modal" >
                        <h2>{selectedItem.titulo}</h2>
                        <img src={selectedItem.image} /> <br />
                        <ul>
                            {selectedItem.desc && selectedItem.desc.map((descItem, index) => (
                                <li key={index}>{descItem.li}</li>
                            ))}
                        </ul>  <br />
                        <button className="closeModal" onClick={closeModal}>Fechar</button>
                    </div>
                </Modal>
            )}

        </div>
    );
}

export default Habilidades;
