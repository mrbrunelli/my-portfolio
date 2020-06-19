import React from 'react'
import { Link } from 'react-router-dom'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { FiArrowLeft, FiArrowRight, FiMapPin } from 'react-icons/fi'
import { FaJs, FaDatabase, FaDocker, FaAsterisk, FaAdobe, FaGraduationCap, FaUniversity, FaChartLine } from 'react-icons/fa'
import './styles.css'

const Education = () => {
    return (
        <>
            <div className="div-scroll">
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        contentStyle={{ background: '#8844ee', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #8844ee' }}
                        date="2019 - present"
                        dateClassName="text-light"
                        iconStyle={{ background: '#8844ee', color: '#fff' }}
                        icon={<FaUniversity />}
                    >
                        <h3 className="vertical-timeline-element-title">Sistemas Para Internet</h3>
                        <h4 className="vertical-timeline-element-subtitle">Faculdade Alfa</h4>
                        <h5 className="vertical-timeline-element-subtitle"><FiMapPin /> Umuarama, PR</h5>
                        <p>- Webdesign e Dispositivos Móveis</p>
                        <p>- PHP | Java | JavaScript | Banco de dados | Engenharia de Software</p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        contentStyle={{ background: '#8844ee', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #8844ee' }}
                        date="06/2020"
                        dateClassName="text-light"
                        iconStyle={{ background: '#8844ee', color: '#fff' }}
                        icon={<FaJs />}
                    >
                        <h3 className="vertical-timeline-element-title">Next Level Week #1</h3>
                        <h4 className="vertical-timeline-element-subtitle">Rocketseat</h4>
                        <p>- Desenvolvimento do Ecoleta, aplicação para ajudar pessoas a encontrarem pontos de coleta para reciclagem</p>
                        <p>- Node.js | ReactJS | React Native | SQlite</p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        contentStyle={{ background: '#8844ee', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #8844ee' }}
                        date="04/2020"
                        dateClassName="text-light"
                        iconStyle={{ background: '#8844ee', color: '#fff' }}
                        icon={<FaAsterisk />}
                    >
                        <h3 className="vertical-timeline-element-title">RegExp (Expressões Regulares)</h3>
                        <h4 className="vertical-timeline-element-subtitle">Glider Cursos</h4>
                        <p>- Desenvolvimento de Expressões Regulares para manipular padrões de texto</p>
                        <p>- RegExp</p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        contentStyle={{ background: '#8844ee', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #8844ee' }}
                        date="03/2020"
                        dateClassName="text-light"
                        iconStyle={{ background: '#8844ee', color: '#fff' }}
                        icon={<FaDocker />}
                    >
                        <h3 className="vertical-timeline-element-title">Docker: Ferramenta essencial para Desenvolvedores</h3>
                        <h4 className="vertical-timeline-element-subtitle">Cod3r Cursos</h4>
                        <p>- Criar aplicações conteinerizadas, imagens personalizadas e soluções que rodem da mesma forma em qualquer ambiente</p>
                        <p>- Docker | Docker Hub | Docker Compose</p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        contentStyle={{ background: '#8844ee', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #8844ee' }}
                        date="03/2020"
                        dateClassName="text-light"
                        iconStyle={{ background: '#8844ee', color: '#fff' }}
                        icon={<FaJs />}
                    >
                        <h3 className="vertical-timeline-element-title">Semana Omnistack 11.0</h3>
                        <h4 className="vertical-timeline-element-subtitle">Rocketseat</h4>
                        <p>- Desenvolvimento do Be The Hero, aplicação para ajudar ONGs a cadastrar demandas e receber contribuições</p>
                        <p>- Node.js | ReactJS | React Native | SQlite</p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        contentStyle={{ background: '#8844ee', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #8844ee' }}
                        date="02/2020"
                        dateClassName="text-light"
                        iconStyle={{ background: '#8844ee', color: '#fff' }}
                        icon={<FaAdobe />}
                    >
                        <h3 className="vertical-timeline-element-title">UI/UX Adobe XD</h3>
                        <h4 className="vertical-timeline-element-subtitle">Origamid</h4>
                        <p>- Desenvolvimento de interfaces de usuário</p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        contentStyle={{ background: '#8844ee', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #8844ee' }}
                        date="01/2020"
                        dateClassName="text-light"
                        iconStyle={{ background: '#8844ee', color: '#fff' }}
                        icon={<FaJs />}
                    >
                        <h3 className="vertical-timeline-element-title">JavaScript ES6</h3>
                        <h4 className="vertical-timeline-element-subtitle">Skylab, Rocketseat</h4>
                        <p>- Curso de JavaScript</p>
                        <p>- Arrow Functions | Class | Arrays Methods | Promises</p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        contentStyle={{ background: '#8844ee', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #8844ee' }}
                        date="12/2019"
                        dateClassName="text-light"
                        iconStyle={{ background: '#8844ee', color: '#fff' }}
                        icon={<FaChartLine />}
                    >
                        <h3 className="vertical-timeline-element-title">Qlik Sense</h3>
                        <h4 className="vertical-timeline-element-subtitle">André Prado, Udemy</h4>
                        <p>- Levantamento de projetos de Business Intelligence, Extração de dados, Aplicações visuais</p>
                        <p>- KPIs | Gráficos | Análise Histórica</p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        contentStyle={{ background: '#8844ee', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #8844ee' }}
                        date="07/2019"
                        dateClassName="text-light"
                        iconStyle={{ background: '#8844ee', color: '#fff' }}
                        icon={<FaDatabase />}
                    >
                        <h3 className="vertical-timeline-element-title">Banco de Dados MySQL</h3>
                        <h4 className="vertical-timeline-element-subtitle">Curso em Vídeo</h4>
                        <p>- Conhecendo mais sobre a linguagem SQL</p>
                        <p>- Instruções | Cláusulas | Agrupadores | Subconsultas</p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
            <div className="pagination">
                <Link to="/"><FiArrowLeft style={{ color: '#fff' }} /></Link>
                <FaGraduationCap style={{ color: '#fff' }} />
                <Link to="/repos"><FiArrowRight style={{ color: '#fff' }} /></Link>
            </div>
        </>
    )
}

export default Education