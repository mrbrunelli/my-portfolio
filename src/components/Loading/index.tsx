import { Puff } from 'react-loader-spinner'
import './styles.css'

export const Loading = () => {
  return (
    <div className='loading'>
      <Puff color='#8844ee' height={100} width={100} />
    </div>
  )
}
