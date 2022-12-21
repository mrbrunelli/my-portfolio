import {
  FiArrowLeft,
  FiArrowRight,
  FiBriefcase,
  FiMapPin
} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { jobs } from '../../data/jobs'
import './styles.css'

export const Home = () => {
  return (
    <>
      <div className='div-scroll'>
        <VerticalTimeline>
          {jobs.map((job, index) => (
            <VerticalTimelineElement
              key={String(index)}
              className='vertical-timeline-element--work'
              contentStyle={{ background: '#8844ee', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  #8844ee' }}
              date={job.date}
              dateClassName='text-light'
              iconStyle={{ background: '#8844ee', color: '#fff' }}
              icon={<job.icon />}
            >
              <h3 className='vertical-timeline-element-title'>{job.title}</h3>
              <h4 className='vertical-timeline-element-subtitle'>
                {job.company}
              </h4>
              <h5 className='vertical-timeline-element-subtitle'>
                <FiMapPin /> {job.location}
              </h5>
              <p>- {job.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
      <div className='pagination'>
        <Link to='/'>
          <FiArrowLeft style={{ color: '#fff' }} />
        </Link>
        <FiBriefcase style={{ color: '#fff' }} />
        <Link to='/education'>
          <FiArrowRight style={{ color: '#fff' }} />
        </Link>
      </div>
    </>
  )
}
