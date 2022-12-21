import React, { useEffect, useState } from 'react'
import { FiBriefcase, FiLink, FiMapPin, FiUser } from 'react-icons/fi'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import api from '../../services/api'
import './styles.css'

interface User {
  id: number
  name: string
  avatar_url: string
  bio: string
  company: string
  html_url: string
  blog: string
  twitter_username: string
  location: string
  email: string
  public_repos: number
  followers: number
}

const Sidebar: React.FC = (props) => {
  const [user, setUser] = useState<User>()
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const getUserByName = async (name: string): Promise<void> => {
    setIsLoading(true)
    try {
      const response = await api.get(`/users/${name}`)
      setUser(response.data)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getUserByName('mrbrunelli')
  }, [])

  return (
    <div className='container'>
      <aside className='sidebar'>
        <div className='user-profile'>
          {isLoading ? (
            <Loader
              type='Puff'
              color='#8844ee'
              height={100}
              width={100}
              timeout={3000}
            />
          ) : (
            <>
              <picture className='user-photo'>
                <img src={user?.avatar_url} alt='Foto de perfil' />
              </picture>
              <div className='user-info'>
                <h3 style={{ color: '#C4E538' }}>
                  <FiUser /> {user?.name}
                </h3>
                <h4>
                  <FiMapPin /> {user?.location}
                </h4>
                <h4>
                  <FiBriefcase /> {user?.company}
                </h4>
              </div>
              <div className='user-contact'>
                <a href={user?.blog} target='_blank' rel='noreferrer'>
                  <h3 style={{ color: '#C4E538' }}>
                    <FiLink /> Linktree
                  </h3>
                </a>
              </div>
            </>
          )}
        </div>
      </aside>

      <main className='main'>
        <div className='content'>{props.children}</div>
      </main>
    </div>
  )
}

export default Sidebar
