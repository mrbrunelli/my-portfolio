import { FiCode, FiMonitor } from 'react-icons/fi'
import { IconType } from 'react-icons/lib'

interface Jobs {
  title: string
  company: string
  location: string
  description: string
  date: string
  icon: IconType
}

const jobs: Jobs[] = [
  {
    title: 'Desenvolvedor de Software',
    company: 'DevApi Tecnologia By TIVIT',
    location: 'Maringá, PR',
    description:
      'Desenvolvo a nova plataforma IPaaS, utilizando Serverless, microfrontends React e microsserviços com NestJS, AWS SQS e MongoDB.',
    date: '2021 - present',
    icon: FiCode,
  },
  {
    title: 'Desenvolvedor de Software',
    company: 'Grupo Gazin',
    location: 'Douradina, PR',
    description:
      'Desenvolvi integrações com NodeJS e Golang, e melhorias em sistemas legados, utilizando várias tecnologias e linguagens de programação, focando principalmente em qualidade de software.',
    date: '2021 - 2021',
    icon: FiCode,
  },
  {
    title: 'Analista de Desenvolvimento',
    company: 'Grupo Gazin',
    location: 'Douradina, PR',
    description:
      'Desenvolvi algoritmos que reduziram em 100% o lançamento manual de notas fiscais e ocorrências em plataformas de terceiros. Também fui responsável por fazer integrações REST com sistemas terceiros, criação de indicadores, extração de dados e desenvolvimento de soluções internas para o setor de Logística.',
    date: '2019 - 2021',
    icon: FiCode,
  },
  {
    title: 'Técnico em Informática',
    company: 'Inforleste Informática',
    location: 'São Paulo, SP',
    description:
      'Montei máquinas de alto desempenho para gamers e arquitetos. Também montei máquinas enterprises para a CPTM (Companhia Paulista de Trens Metropolitanos) e para os Postos BR (PETROBRAS).',
    date: '2012 - 2015',
    icon: FiMonitor,
  },
]

export default jobs
