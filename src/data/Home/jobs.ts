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
        company: 'Grupo Gazin',
        location: 'Douradina, PR',
        description: 'Desenvolvimento de APIs, integrações, rotinas, microsserviços, sistemas web e desktop.',
        date: '2021 - present',
        icon: FiCode,
    },{
        title: 'Analista de Sistemas',
        company: 'Grupo Gazin',
        location: 'Douradina, PR',
        description: 'Análises, extrações de dados PostgreSQL, desenvolvimento de B.I com Qlik Sense, rotinas e cron jobs.',
        date: '2019 - 2021',
        icon: FiCode,
    },
    {
        title: 'Técnico em Informática',
        company: 'Inforleste Informática',
        location: 'São Paulo, SP',
        description: 'Montagem e manutenção de computadores, Especialista em montagem de máquinas de alto desempenho.',
        date: '2012 - 2015',
        icon: FiMonitor
    },
]

export default jobs