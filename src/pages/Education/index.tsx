import React from 'react'
import { Link } from 'react-router-dom'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { FiArrowLeft, FiArrowRight, FiMapPin } from 'react-icons/fi'
import { FaGraduationCap } from 'react-icons/fa'
import courses from '../../data/Education/courses'
import './styles.css'

const Education = () => {
    return (
        <>
            <div className="div-scroll">
                <VerticalTimeline>
                    {courses.map((course, index) => (
                        <VerticalTimelineElement
                            key={String(index)}
                            className="vertical-timeline-element--education"
                            contentStyle={{ background: '#8844ee', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #8844ee' }}
                            date={course.date}
                            dateClassName="text-light"
                            iconStyle={{ background: '#8844ee', color: '#fff' }}
                            icon={<course.icon />}
                        >
                            <h3 className="vertical-timeline-element-title">{course.title}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{course.institution}</h4>
                            <h5 className="vertical-timeline-element-subtitle">{course.location ? <FiMapPin /> : ''} {course.location}</h5>
                            <p>- {course.description}</p>
                            <p>- {course.technologies.join(' | ')}</p>
                        </VerticalTimelineElement>
                    ))}
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