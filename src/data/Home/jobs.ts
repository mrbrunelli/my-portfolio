import { FiCode } from 'react-icons/fi'
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
    title: 'Desenvolvedor de Software Sênior',
    company: 'Compass UOL',
    location: 'Douradina, PR - Home Office',
    description:
      'Faço parte da squad de engenharia VLP (Visão Longitudinal do Paciente), onde integramos com nossos clientes todo o histórico de saúde do paciente, medicamentos receitados pelo médico e locais onde foi atendido.',
    date: '2022 - present',
    icon: FiCode
  },
  {
    title: 'Desenvolvedor de Software Pleno',
    company: 'DevApi Tecnologia By TIVIT',
    location: 'Douradina, PR - Home Office',
    description:
      'Fiz parte do time de engenharia, atuando no desenvolvimento da plataforma IPaaS e também atuando diretamente em integrações. Tenho em meu portfólio de integrações grandes empresas como Barba de Respeito, Refrigeração Mota, TBankS, Shopee, Mercos e Mercado Livre. Também compartilhei muito conhecimento técnico sobre testes, design patterns e arquitetura para o time.',
    date: '2021 - 2022',
    icon: FiCode
  },
  {
    title: 'Desenvolvedor de Software Júnior',
    company: 'Grupo Gazin',
    location: 'Douradina, PR - Home Office',
    description:
      'Fiz parte do time de incidentes, desenvolvi melhorias em sistemas internos e criei indicadores e relatórios para os demais setores do grupo Gazin.',
    date: '2021 - 2021',
    icon: FiCode
  },
  {
    title: 'Analista de Desenvolvimento Júnior',
    company: 'Grupo Gazin',
    location: 'Douradina, PR',
    description:
      'Fiz parte do time de logística e transporte. Desenvolvi integrações que reduziram em 100% o lançamento manual de notas fiscais e ocorrências em sistemas terceiros. Também realizei integrações com sistemas de frota e jornada, e desenvolvi indicadores no Qlik Sense para a gerência acompanhar o desempenho das entregas.',
    date: '2019 - 2021',
    icon: FiCode
  }
]

export default jobs
