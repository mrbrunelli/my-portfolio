import {
  FaAdobe,
  FaAsterisk,
  FaAws,
  FaChartLine,
  FaDatabase,
  FaDocker,
  FaGoogle,
  FaJs,
  FaUniversity
} from 'react-icons/fa'
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

export const courses: Courses[] = [
  {
    title: 'Sistemas Para Internet',
    institution: 'UniAlfa',
    location: 'Umuarama, PR',
    description: 'Tecnologia em Sistemas para Internet',
    icon: FaUniversity,
    date: '2019 - 2021',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'Java',
      'PHP',
      'Flutter',
      'MySQL',
      'Docker',
      'Engenharia de Software'
    ]
  },
  {
    title: 'Clean Architecture & TDD with Node.js',
    institution: 'Rodrigo Manguinho',
    location: '',
    description:
      'Desenvolvimento de aplicações testáveis e desacopladas com Node.js + Typescript',
    icon: FaJs,
    date: '03/2022',
    technologies: [
      'Node.js',
      'Typescript',
      'Solid',
      'Clean Architecture',
      'TDD',
      'Design Patterns'
    ]
  },
  {
    title: 'Aplicações Serverless',
    institution: 'Erick Wendel',
    location: '',
    description:
      'Desenvolvimento de aplicações escaláveis com AWS + Serverless Framework',
    icon: FaAws,
    date: '01/2022',
    technologies: ['Node.js', 'Serverless Framework', 'AWS']
  },
  {
    title: 'Next Level Week #5',
    institution: 'Rocketseat',
    location: '',
    description:
      'Desenvolvimento do RocketChat, chat em tempo real, utilizando Node.js, TypeORM e Socket.IO',
    icon: FaJs,
    date: '05/2021',
    technologies: ['Node.js', 'Express', 'TypeORM', 'Socket.IO']
  },
  {
    title: 'Next Level Week #4',
    institution: 'Rocketseat',
    location: '',
    description:
      'Desenvolvimento do Move.it, aplicação pomodoro, utilizando Next e Context API.',
    icon: FaJs,
    date: '03/2021',
    technologies: ['React', 'Next.js', 'Context API']
  },
  {
    title: 'Go (Golang): Explorando a Linguagem do Google',
    institution: 'Cod3r Cursos',
    location: '',
    description:
      'Desenvolvimento de aplicações Back-End, Automações, Webservices, Rotinas e Microsserviços',
    icon: FaGoogle,
    date: '01/2021',
    technologies: ['Go', 'Go Modules', 'Http', 'MySQL', 'Microservices']
  },
  {
    title: 'Next Level Week #1',
    institution: 'Rocketseat',
    location: '',
    description:
      'Desenvolvimento do Ecoleta, aplicação para ajudar pessoas a encontrarem pontos de coleta para reciclagem',
    icon: FaJs,
    date: '06/2020',
    technologies: ['Node.js', 'ReactJS', 'React Native', 'SQlite']
  },
  {
    title: 'RegExp: Expressões Regulares',
    institution: 'Glider Cursos',
    location: '',
    description:
      'Desenvolvimento de Expressões Regulares para manipular padrões de texto',
    icon: FaAsterisk,
    date: '04/2020',
    technologies: ['RegExp']
  },
  {
    title: 'Docker: Ferramenta essencial para Desenvolvedores',
    institution: 'Cod3r Cursos',
    location: '',
    description:
      'Criar aplicações conteinerizadas, imagens personalizadas e soluções que rodem da mesma forma em qualquer ambiente',
    icon: FaDocker,
    date: '03/2020',
    technologies: ['Docker', 'Docker Hub', 'Docker Compose']
  },
  {
    title: 'Semana Omnistack 11.0',
    institution: 'Rocketseat',
    location: '',
    description:
      'Desenvolvimento do Be The Hero, aplicação para ajudar ONGs a cadastrar demandas e receber contribuições',
    icon: FaJs,
    date: '03/2020',
    technologies: ['Node.js', 'ReactJS', 'React Native', 'SQlite']
  },
  {
    title: 'UI/UX Adobe XD',
    institution: 'Origamid',
    location: '',
    description: 'Desenvolvimento de interfaces de usuário',
    icon: FaAdobe,
    date: '02/2020',
    technologies: ['Adobe XD']
  },
  {
    title: 'JavaScript ES6',
    institution: 'Skylab, Rocketseat',
    location: '',
    description: 'Curso de JavaScript ES6',
    icon: FaJs,
    date: '01/2020',
    technologies: ['Arrow Functions', 'Class ', 'Arrays Methods', 'Promises']
  },
  {
    title: 'Qlik Sense',
    institution: 'André Prado, Udemy',
    location: '',
    description:
      'Levantamento de projetos de Business Intelligence, Extração de dados, Aplicações visuais',
    icon: FaChartLine,
    date: '12/2019',
    technologies: ['KPIs', 'Gráficos', 'Análise Histórica']
  },
  {
    title: 'Banco de Dados MySQL',
    institution: 'Curso em Vídeo',
    location: '',
    description: 'Conhecendo mais sobre a linguagem SQL',
    icon: FaDatabase,
    date: '07/2019',
    technologies: ['Instruções', 'Cláusulas', 'Agrupadores', 'Subconsultas']
  }
]
