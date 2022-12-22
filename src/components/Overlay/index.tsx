import React from 'react'
import './styles.css'

interface Props {
  children: React.ReactNode
}

export const Overlay = (props: Props) => {
  return <div className='overlay'>{props.children}</div>
}
