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
        title: 'Desenvolvedor Web Full-Stack',
        company: 'Grupo Gazin',
        location: 'Douradina, PR',
        description: 'Desenvolvimento de APIs com Node.js e Go, microsserviços e rotinas, aplicações com ReactJS e React Native, UI/UX Design Adobe XD, PostgreSQL e B.I com Qlik Sense.',
        date: '2019 - present',
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