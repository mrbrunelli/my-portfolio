import { FaJs, FaDatabase, FaDocker, FaAsterisk, FaAdobe, FaUniversity, FaChartLine } from 'react-icons/fa'
import { IconType } from 'react-icons/lib'

interface Courses {
    title: string
    institution: string
    location: string
    description: string
    icon: IconType
    date: string
    technologies: string[]
}

const courses: Courses[] = [
    {
        title: 'Sistemas Para Internet',
        institution: 'Faculdade Alfa',
        location: 'Umuarama, PR',
        description: 'Webdesign e Dispositivos Móveis',
        icon: FaUniversity,
        date: '2019 - present',
        technologies: [
            'PHP',
            'Java',
            'JavaScript',
            'Banco de Dados',
            'Engenharia de Software',
        ]
    },
    {
        title: 'Next Level Week #1',
        institution: 'Rocketseat',
        location: '',
        description: 'Desenvolvimento do Ecoleta, aplicação para ajudar pessoas a encontrarem pontos de coleta para reciclagem',
        icon: FaJs,
        date: '06/2020',
        technologies: [
            'Node.js',
            'ReactJS',
            'React Native',
            'SQlite',
            'Engenharia de Software',
        ]
    },
    {
        title: 'RegExp: Expressões Regulares',
        institution: 'Glider Cursos',
        location: '',
        description: 'Desenvolvimento de Expressões Regulares para manipular padrões de texto',
        icon: FaAsterisk,
        date: '04/2020',
        technologies: [
            'RegExp'
        ]
    },
    {
        title: 'Docker: Ferramenta essencial para Desenvolvedores',
        institution: 'Cod3r Cursos',
        location: '',
        description: 'Criar aplicações conteinerizadas, imagens personalizadas e soluções que rodem da mesma forma em qualquer ambiente',
        icon: FaDocker,
        date: '03/2020',
        technologies: [
            'Docker',
            'Docker Hub',
            'Docker Compose',
        ]
    },
    {
        title: 'Semana Omnistack 11.0',
        institution: 'Rocketseat',
        location: '',
        description: 'Desenvolvimento do Be The Hero, aplicação para ajudar ONGs a cadastrar demandas e receber contribuições',
        icon: FaJs,
        date: '03/2020',
        technologies: [
            'Node.js',
            'ReactJS',
            'React Native',
            'SQlite',
        ]
    },
    {
        title: 'UI/UX Adobe XD',
        institution: 'Origamid',
        location: '',
        description: 'Desenvolvimento de interfaces de usuário',
        icon: FaAdobe,
        date: '02/2020',
        technologies: [
            'Adobe XD',
        ]
    },
    {
        title: 'JavaScript ES6',
        institution: 'Skylab, Rocketseat',
        location: '',
        description: 'Curso de JavaScript ES6',
        icon: FaJs,
        date: '01/2020',
        technologies: [
            'Arrow Functions',
            'Class ',
            'Arrays Methods',
            'Promises',
        ]
    },
    {
        title: 'Qlik Sense',
        institution: 'André Prado, Udemy',
        location: '',
        description: 'Levantamento de projetos de Business Intelligence, Extração de dados, Aplicações visuais',
        icon: FaChartLine,
        date: '12/2019',
        technologies: [
            'KPIs',
            'Gráficos',
            'Análise Histórica',
        ]
    },
    {
        title: 'Banco de Dados MySQL',
        institution: 'Curso em Vídeo',
        location: '',
        description: 'Conhecendo mais sobre a linguagem SQL',
        icon: FaDatabase,
        date: '07/2019',
        technologies: [
            'Instruções',
            'Cláusulas',
            'Agrupadores',
            'Subconsultas',
        ]
    },
]

export default courses