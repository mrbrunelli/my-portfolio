import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { FiCode, FiMonitor, FiMapPin } from 'react-icons/fi'
import './styles.css'

const Home = () => {
    return (
        <div>
            <div className="div-scroll">
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#8844ee', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #8844ee' }}
                        date="2019 - present"
                        dateClassName="text-dark"
                        iconStyle={{ background: '#8844ee', color: '#fff' }}
                        icon={<FiCode />}
                    >
                        <h3 className="vertical-timeline-element-title">Analista de Sistemas</h3>
                        <h4 className="vertical-timeline-element-subtitle">Grupo Gazin</h4>
                        <h5 className="vertical-timeline-element-subtitle"><FiMapPin /> Douradina, PR</h5>
                        <p>
                            - Desenvolvimento de APIs com Node.js, aplicações com ReactJS e React Native, UI/UX Design Adobe XD, PostgreSQL and Qlik Sense Management.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#8844ee', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #8844ee' }}
                        date="2012 - 2015"
                        dateClassName="text-dark"
                        iconStyle={{ background: '#8844ee', color: '#fff' }}
                        icon={<FiMonitor />}
                    >
                        <h3 className="vertical-timeline-element-title">Técnico em Informática</h3>
                        <h4 className="vertical-timeline-element-subtitle">Inforleste Informática</h4>
                        <h5 className="vertical-timeline-element-subtitle"><FiMapPin /> São Paulo, SP</h5>
                        <p>
                            - Montagem e manutenção de computadores, Especialista em montagem de máquinas de alto desempenho.
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </div>
    )
}

export default Home