import React from 'react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { IconType } from 'react-icons/lib'
import { Link } from 'react-router-dom'

interface ContentProps {
  back: string
  to: string
  icon: IconType
  children: React.ReactNode
}

export const Content: React.FC<ContentProps> = (props) => {
  return (
    <>
      <div className='div-scroll'>{props.children}</div>
      <div className='pagination'>
        <Link to={props.back}>
          <FiArrowLeft style={{ color: '#fff' }} />
        </Link>
        <props.icon style={{ color: '#fff' }} />
        <Link to={props.to}>
          <FiArrowRight style={{ color: '#fff' }} />
        </Link>
      </div>
    </>
  )
}
