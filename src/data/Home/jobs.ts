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
      'Faço parte do time de engenharia, atuando no desenvolvimento da plataforma IPaaS e também atuando diretamente em integrações. Tenho em meu portfólio de integrações grandes empresas como Barba de Respeito, Refrigeração Mota, TBankS, Shopee, Mercos e Mercado Livre. Também estou sempre trazendo conhecimento técnico sobre testes, design patterns e arquitetura para o time.',
    date: '2021 - present',
    icon: FiCode,
  },
  {
    title: 'Desenvolvedor de Software',
    company: 'Grupo Gazin',
    location: 'Douradina, PR',
    description:
      'Fiz parte do time de incidentes, desenvolvi melhorias em sistemas internos e criei indicadores e relatórios para os demais setores do grupo Gazin.',
    date: '2021 - 2021',
    icon: FiCode,
  },
  {
    title: 'Analista de Desenvolvimento',
    company: 'Grupo Gazin',
    location: 'Douradina, PR',
    description:
      'Fiz parte do time de logística e transporte. Desenvolvi integrações que reduziram em 100% o lançamento manual de notas fiscais e ocorrências em sistemas terceiros. Também realizei integrações com sistemas de frota e jornada, e desenvolvi indicadores no Qlik Sense para a gerência acompanhar o desempenho das entregas.',
    date: '2019 - 2021',
    icon: FiCode,
  },
  {
    title: 'Técnico em Informática',
    company: 'Inforleste Informática',
    location: 'São Paulo, SP',
    description:
      'Meu segundo emprego, aprendi a montar máquinas desde configurações básicas para uso casual até configurações de alto desempenho para gamers e arquitetos. Ajudava meu primo a fazer pedidos, dar entrada em mercadorias e a vender. Essa experiência melhorou muito minha comunicação e articulação frente ao cliente.',
    date: '2012 - 2014',
    icon: FiMonitor,
  },
]

export default jobs
