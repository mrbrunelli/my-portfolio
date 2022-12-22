import Loader from 'react-loader-spinner'
import './styles.css'

export const Loading: React.FC = () => {
  return (
    <div className='loading'>
      <Loader type='Puff' color='#8844ee' height={100} width={100} />
    </div>
  )
}
