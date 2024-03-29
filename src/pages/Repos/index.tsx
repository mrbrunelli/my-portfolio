import { FaCss3, FaDatabase, FaHtml5, FaJs, FaPhp } from 'react-icons/fa'
import { FiCode, FiDownload, FiGithub } from 'react-icons/fi'
import { useQuery } from 'react-query'
import { Content } from '../../components/Content'
import { Error } from '../../components/Error'
import { Loading } from '../../components/Loading'
import api from '../../services/api'
import { Props } from '../../types/props'
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

const Container = (props: Props) => {
  return (
    <Content back='/education' to='repos' icon={FiGithub}>
      {props.children}
    </Content>
  )
}

export const Repos = () => {
  const getRepositories = async (): Promise<Repo[]> => {
    const response = await api.get<Repo[]>(`/users/mrbrunelli/repos`, {
      params: {
        sort: 'interaction',
        per_page: 100
      }
    })
    return response.data
  }

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
      default: <FiCode />
    }

    return options[lang] || options.default
  }

  const { data, isLoading, error } = useQuery('repositories', getRepositories)

  if (isLoading) {
    return (
      <Container>
        <Loading />
      </Container>
    )
  }

  if (error) {
    return (
      <Container>
        <Error />
      </Container>
    )
  }

  return (
    <Container>
      <div className='card'>
        {data &&
          data.map((repo, index) => (
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
    </Container>
  )
}
