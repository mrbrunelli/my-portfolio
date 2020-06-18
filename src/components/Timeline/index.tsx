import React from 'react'
import './styles.css'

interface TimelineProps {
    title: string
    date: string
    paragraph: string
    link: string
    direction: string
}

const Timeline: React.FC = (props) => {

    const TimelineItem: React.FC<TimelineProps> = (props) => {
        return (
            <div className={"container " + props.direction}>
                <div className="content">
                    <h2>{props.title}</h2>
                    <h4>{props.date}</h4>
                    <p>{props.paragraph}</p>
                    <small>{props.link}</small>
                </div>
            </div>
        )
    }

    return (
        <div className="timeline">
            <TimelineItem
                direction="left"
                title="Hqs PHP"
                paragraph="Loja virtual de venda de quadrinhos"
                date="01/01/01"
                link="https://github.com/mrbrunelli/hqs-php"
            />
            <TimelineItem
                direction="right"
                title="Hqs PHP"
                paragraph="Loja virtual de venda de quadrinhos"
                date="01/01/01"
                link="link.com.br"
            />
        </div>
    )
}

export default Timeline