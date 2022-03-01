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

type Lang = 'JavaScript' | 'TypeScript' | 'PHP' | 'TSQL' | 'HTML' | 'CSS'

interface Repo {
  name: string
  full_name: string
  html_url: string
  description: string
  created_at: string
  updated_at: string
  clone_url: string
  language: Lang
}

const Repos = () => {
  const [repos, setRepos] = useState<Repo[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const getRepositoriesByUserName = async (name: string): Promise<void> => {
    setIsLoading(true)
    try {
      const response = await api.get(`/users/${name}/repos`, {
        params: {
          sort: 'interaction',
          per_page: 100,
        },
      })
      setRepos(response.data)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getRepositoriesByUserName('mrbrunelli')
  }, [])

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString('pt-BR')

  const verifyLanguage = (lang: Lang) => {
    const options = {
      JavaScript: <FaJs />,
      TypeScript: <FaJs />,
      PHP: <FaPhp />,
      TSQL: <FaDatabase />,
      HTML: <FaHtml5 />,
      CSS: <FaCss3 />,
      default: <FiCode />,
    }

    return options[lang] || options.default
  }

  return (
    <>
      <div className='div-scroll'>
        {isLoading ? (
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
