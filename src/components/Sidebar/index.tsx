import React from 'react'
import { FiBriefcase, FiLink, FiMapPin, FiUser } from 'react-icons/fi'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import { useQuery } from 'react-query'
import api from '../../services/api'
import { Error } from '../Error'
import { Loading } from '../Loading'
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
  const getUserProfile = async (): Promise<User> => {
    const response = await api.get<User>('/users/mrbrunelli')
    return response.data
  }

  const { data, isLoading, error } = useQuery('userProfile', getUserProfile)

  if (isLoading) {
    return <Loading />
  }

  if (error) {
    return <Error />
  }

  return (
    <div className='container'>
      <aside className='sidebar'>
        <div className='user-profile'>
          <picture className='user-photo'>
            <img src={data?.avatar_url} alt='Foto de perfil' />
          </picture>
          <div className='user-info'>
            <h3 style={{ color: '#C4E538' }}>
              <FiUser /> {data?.name}
            </h3>
            <h4>
              <FiMapPin /> {data?.location}
            </h4>
            <h4>
              <FiBriefcase /> {data?.company}
            </h4>
          </div>
          <div className='user-contact'>
            <a href={data?.blog} target='_blank' rel='noreferrer'>
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

export default Sidebar
