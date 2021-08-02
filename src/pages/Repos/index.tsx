import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {
  FiArrowLeft,
  FiArrowRight,
  FiDownload,
  FiGithub,
  FiCode,
} from 'react-icons/fi'
import { FaJs, FaDatabase, FaPhp, FaHtml5, FaCss3 } from 'react-icons/fa'
import api from '../../services/api'
import './styles.css'

interface Repo {
  name: string
  full_name: string
  html_url: string
  description: string
  created_at: string
  updated_at: string
  clone_url: string
  language: string
}

const Repos = () => {
  const [repos, setRepos] = useState<Repo[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setLoading(true)
    api
      .get('/users/mrbrunelli/repos?sort=interactions&per_page=100')
      .then((response) => {
        setRepos(response.data)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  function formatDate(date: string) {
    return date.replace(/^(\d{4})[-](\d{2})[-](\d{2}).*/g, '$3/$2/$1')
  }

  function verifyLanguage(lang: string) {
    switch (lang) {
      case 'JavaScript':
        return <FaJs />
      case 'TypeScript':
        return <FaJs />
      case 'PHP':
        return <FaPhp />
      case 'TSQL':
        return <FaDatabase />
      case 'HTML':
        return <FaHtml5 />
      case 'CSS':
        return <FaCss3 />
      default:
        return <FiCode />
    }
  }

  return (
    <>
      <div className='div-scroll'>
        {loading ? (
          <div className='loading'>
            <Loader
              type='Puff'
              color='#8844ee'
              height={100}
              width={100}
              timeout={3000}
            />
          </div>
        ) : (
          <div className='card'>
            {repos.map((repo, index) => (
              <div key={index.valueOf()} className='card-item'>
                <div className='card-item-logo'>
                  <span style={{ fontSize: '36px' }}>
                    {verifyLanguage(repo.language)}
                  </span>
                </div>
                <div className='card-item-content'>
                  <span className='card-item-header'>
                    <h3>
                      {index.valueOf()} {repo.name}
                    </h3>
                    <a
                      style={{ color: '#fff', fontSize: '20px' }}
                      href={repo.html_url + '/archive/master.zip'}
                    >
                      <FiDownload />
                    </a>
                  </span>
                  <small>Atualizado em: {formatDate(repo.updated_at)}</small>
                  <hr />
                  <p>{repo.description}</p>
                  <a style={{ color: '#C4E538' }} href={repo.html_url}>
                    <small>{repo.html_url}</small>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className='pagination'>
        <Link to='/education'>
          <FiArrowLeft style={{ color: '#fff' }} />
        </Link>
        <FiGithub style={{ color: '#fff' }} />
        <Link to='/repos'>
          <FiArrowRight style={{ color: '#fff' }} />
        </Link>
      </div>
    </>
  )
}

export default Repos
