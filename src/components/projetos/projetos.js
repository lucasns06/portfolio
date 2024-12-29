import React, { useState, useEffect } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { gsap } from "gsap";
import telaApp from "../../img/ComunicaTela.png";
import telaSite from "../../img/site.png";
import studyImg from "../../img/study.png";
import apiImg from "../../img/api.png";
import './projetos.css';
import '../../App.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Projetos = () => {
    return (
        <div className="projetos" id="projetosId">
            <h1 className="textAnim">Meus <span className="span">projetos</span></h1> <br /> <br />

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <div className="swiper-container sombra">
                        <h1>Comunica</h1>  <br />
                        <div className="d-flex">
                            <div>
                                <p>
                                    No meu TCC, estou desenvolvendo um aplicativo voltado para facilitar a
                                    comunicação de pessoas neurodivergentes não verbais. 
                                </p> <br />
                                <p className="tcc-desc">
                                    O aplicativo consiste em usar a comunicação por troca de imagens.
                                    Além disso, inclui funcionalidades como a verbalização de texto em voz,
                                    ampliando seu alcance para outros públicos com necessidades comunicativas diversas.  <br />
                                </p> 
                                {/* <a href="https://github.com/lucasns06/Comunica" target="_blank" rel="noopener noreferrer">
                                <button className="projetosBtn">Github</button>
                            </a>   */}
                                <p>Uma prévia do aplicativo está em um video no site do proximo slide.</p>
                                <p style={{ color: 'green' }}>O aplicativo está sendo desenvolvido com React Native</p>
                            </div>
                            <img src={telaApp} className="telaApp sombra" alt="telaAplicativo" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="swiper-container swiper-container2 sombra">
                        <h1>ComuniTec</h1>  <br />
                        <div className="d-flex">
                            <div>
                                <p>Um site desenvolvido com React de uma empresa fictícia criada para o meu TCC.</p>
                                <p>Com a finalidade de mostrar melhor o meu produto, o aplicativo comunica.</p> <br />
                            </div>
                            <a href="https://lucasns06.github.io/ComuniTec/" target="_blank" rel="noopener noreferrer">
                                <img src={telaSite} className="telaSite sombra" alt="telaSite" />
                            </a>
                        </div>
                        <div className="projetos-buttons">
                                    <a href="https://github.com/lucasns06/ComuniTec/" target="_blank" rel="noopener noreferrer">
                                        <svg width="100" height="100" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C12.1381 15.0539 13.5182 14.0332 14.4958 12.6716C15.4735 11.3101 15.9996 9.6762 16 8C16 3.58 12.42 0 8 0Z"
                                                fill="var(--cor-preta)" />
                                        </svg>
                                    </a>
                                    <a href="https://lucasns06.github.io/ComuniTec/" target="_blank" rel="noopener noreferrer">
                                        <button class="projetosBtn versiteBtn sombra">Abrir site</button>
                                    </a>
                                </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="swiper-container swiper-container3 sombra ">
                        <h1>EstudosAPI</h1> <br />
                        <div className="d-flex">
                            <img src={apiImg} className="telaApp sombra" alt="telaApi" />
                            <div>
                                <p>RESTful API, criada para gerenciar tarefas associadas a categorias. <br></br>
                                    O projeto utiliza ASP.NET Core e Entity Framework Core.</p>

                            </div>
                        </div>
                        <div className="projetos-buttons">
                            <a href="https://github.com/lucasns06/EstudosAPI" target="_blank" rel="noopener noreferrer">
                                <svg width="64" height="64" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C12.1381 15.0539 13.5182 14.0332 14.4958 12.6716C15.4735 11.3101 15.9996 9.6762 16 8C16 3.58 12.42 0 8 0Z"
                                        fill="var(--cor-preta)" />
                                </svg>
                            </a>
                            <a href="https://lucasns06.github.io/APIs" target="_blank" rel="noopener noreferrer">
                                <button class="projetosBtn versiteBtn sombra">Testar API</button>
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div >
    );
}

export default Projetos;
