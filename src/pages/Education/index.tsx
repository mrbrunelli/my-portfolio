import { FaGraduationCap } from 'react-icons/fa'
import { FiMapPin } from 'react-icons/fi'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { Content } from '../../components/Content'
import { courses } from '../../data/courses'
import './styles.css'

export const Education = () => {
  return (
    <Content back='/' to='/repos' icon={FaGraduationCap}>
      <VerticalTimeline>
        {courses.map((course, index) => (
          <VerticalTimelineElement
            key={String(index)}
            className='vertical-timeline-element--education'
            contentStyle={{ background: '#8844ee', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #8844ee' }}
            date={course.date}
            dateClassName='text-light'
            iconStyle={{ background: '#8844ee', color: '#fff' }}
            icon={<course.icon />}
          >
            <h3 className='vertical-timeline-element-title'>{course.title}</h3>
            <h4 className='vertical-timeline-element-subtitle'>
              {course.institution}
            </h4>
            <h5 className='vertical-timeline-element-subtitle'>
              {course.location ? <FiMapPin /> : ''} {course.location}
            </h5>
            <p>- {course.description}</p>
            <p>- {course.technologies.join(' | ')}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Content>
  )
}
