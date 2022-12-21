import React from 'react'
import './styles.css'

export const Overlay: React.FC = (props) => {
  return <div className='overlay'>{props.children}</div>
}
