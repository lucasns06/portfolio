import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import telaApp from "../img/ComunicaTela.png";
import telaSite from "../img/site.png";

const Projetos = () => {
    const [isMoved, setIsMoved] = useState(false);

    useEffect(() => {
        const mudarSlideBtn = document.querySelector('.mudarSlide');
        if (mudarSlideBtn) {
            mudarSlideBtn.onclick = function () {
                const container = document.querySelector('.container');
                const carrossel = document.querySelector('.carrossel');
                const tamanhoCarrossel = carrossel.offsetWidth;

                if (isMoved) {
                    container.style.transform = 'translateX(0)';
                } else {
                    container.style.transform = `translateX(-${tamanhoCarrossel}px)`;
                }

                setIsMoved(!isMoved);
            };
        }

        const mudarSlideTcc = document.querySelector('.slideTccChange');
        const siteTela = document.querySelector('.siteTela');
        const appTela = document.querySelector('.appTela');

        if (mudarSlideTcc) {
            mudarSlideTcc.onclick = function () {
                siteTela.classList.toggle('show');

                if (siteTela.classList.contains('show')) {
                    document.getElementById('slideTccChangeId').innerText = "Site";
                    appTela.classList.remove('show');
                } else {
                    document.getElementById('slideTccChangeId').innerText = "Aplicativo";
                    appTela.classList.add('show');
                }
            };
        }
    }, [isMoved]); // Re-renders when isMoved changes

    useEffect(() => {
        gsap.to('.carrossel', {
            scrollTrigger: {
                trigger: '.carrossel',
                toggleActions: "restart none none none"
            },
            opacity: 1,
            duration: 2
        });
    }, []);

    return (
        <div className="projetos" id="projetosId">
            <p className="textAnim">Meus <span className="span">projetos</span></p> <br /> <br />
            <div className="carrossel">
                <div className="container">
                    <div className="slide TCC">
                        <p className="slideTccTitulo">trabalho de conclusão de curso</p>
                        <div className="tccConteudo">
                            <div className="tccTexto">
                                <p>Durante o meu TCC, desenvolvi um aplicativo voltado para facilitar a comunicação de pessoas neurodivergentes não verbais. <br />
                                    Esse projeto incluiu a criação de funcionalidades como biblioteca de palavras, síntese de fala e uma interface acessível, com foco em proporcionar uma experiência intuitiva e personalizada para os usuários.</p> <br />
                                <p>E também um site, simples e intuitivo, da minha "empresa" ComuniTec, com o aplicativo Comunica.</p>
                                <br />
                                <p>Aplicativo: Desenvolvimento no 3º Módulo</p>
                                <p>Site: <span style={{ color: 'green' }}>Concluído</span></p>
                                <br /><br />

                                <div className="tccTextoBotoes">
                                    <p>ComuniTec (site)</p>
                                    <a href="https://github.com/lucasns06/ComuniTec" target="_blank" rel="noopener noreferrer">
                                        <button className="githubBtn">Github</button>
                                    </a>
                                    <br /><br />
                                    <p>Comunica (aplicativo)</p>
                                    <p style={{ color: 'red' }}>Em desenvolvimento</p>
                                </div>
                            </div>
                            <div className="tccImagem">
                                <button className="slideTccChange" id="slideTccChangeId">Aplicativo</button> <br /><br />
                                <div className="slideTcc">
                                    <img src={telaApp} alt="AppTela" className="appTela show" />
                                    <img src={telaSite} alt="siteTela" className="siteTela" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slide API">
                        <p className="slideTccTitulo">Planejamento de estudos API</p> <br />
                        <p>A API de Planejamento de Estudos vai ser projetada para auxiliar no gerenciamento eficiente de tarefas e atividades acadêmicas. Esse projeto vai ser desenvolvido para organizar e acompanhar o progresso dos estudos de forma estruturada, com funcionalidades como criação e categorização de tarefas, organização de projetos e notificações.</p> <br /><br /><br /><br />

                        <h1>Funcionalidades</h1> <br />

                        <ul className="apiUl">
                            <li>Gerenciamento de Tarefas e Projetos: Estruturação de tarefas com data e prioridade, agrupadas em projetos.</li> <br />
                            <li>Notificações Personalizadas: Envio de alertas e lembretes para garantir que o usuário não esqueça a atividade.</li> <br />
                            <li>Cadastro e Perfil de Usuário: Armazena informações básicas do usuário, ajudando na personalização do estudo.</li>
                        </ul> <br /><br /><br /><br />
                        <h1>Informações</h1> <br />
                        <p>Feito no Visual Studio Code</p>
                        <p><a href="https://www.devmedia.com.br/orm-object-relational-mapper/19056" target="_blank" rel="noopener noreferrer">ORM</a> para a conexão com o banco de dados relacional</p> <br /><br />

                        <p style={{ color: 'red' }}>Em desenvolvimento</p>
                    </div>
                </div>
            </div>
            <div className="mudarSlide">
                <button className="changeSlideBtn">Mudar</button>
            </div>
        </div>
    );
}

export default Projetos;
