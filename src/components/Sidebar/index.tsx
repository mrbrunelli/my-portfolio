import React from 'react'
import { FiBriefcase, FiLink, FiMapPin, FiUser } from 'react-icons/fi'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import { profile } from '../../data/profile'
import './styles.css'

export const Sidebar: React.FC = (props) => {
  return (
    <div className='container'>
      <aside className='sidebar'>
        <div className='user-profile'>
          <picture className='user-photo'>
            <img src={profile.picture} alt='Foto de perfil' />
          </picture>
          <div className='user-info'>
            <h3 style={{ color: '#C4E538' }}>
              <FiUser /> {profile.name}
            </h3>
            <h4>
              <FiMapPin /> {profile.location}
            </h4>
            <h4>
              <FiBriefcase /> {profile.company} - {profile.office}
            </h4>
          </div>
          <div className='user-contact'>
            <a href={profile.contact} target='_blank' rel='noreferrer'>
              <h3 style={{ color: '#C4E538' }}>
                <FiLink /> Linktree
              </h3>
            </a>
          </div>
        </div>
      </aside>

      <main className='main'>
        <div className='content'>{props.children}</div>
      </main>
    </div>
  )
}
