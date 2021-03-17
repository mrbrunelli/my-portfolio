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
        title: 'Programador',
        company: 'Grupo Gazin',
        location: 'Douradina, PR',
        description: 'Atendo demandas de incidentes e desenvolvo melhorias em sistemas internos utilizando várias tecnologias e linguagens de programação, focando principalmente em qualidade de software.',
        date: '2021 - present',
        icon: FiCode,
    }, {
        title: 'Analista de Sistemas',
        company: 'Grupo Gazin',
        location: 'Douradina, PR',
        description: 'Desenvolvi algoritmos que reduziram em 100% o lançamento manual de notas fiscais e ocorrências em plataformas de terceiros. Também fui responsável por fazer integrações REST com sistemas terceiros, criação de indicadores, extração de dados e desenvolvimento de soluções internas para o setor de Logística.',
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