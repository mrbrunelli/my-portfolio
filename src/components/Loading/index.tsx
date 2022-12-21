import Loader from 'react-loader-spinner'
import { Overlay } from '../Overlay'
import './styles.css'

export const Loading: React.FC = () => {
  return (
    <Overlay>
      <Loader type='Puff' color='#8844ee' height={100} width={100} />
    </Overlay>
  )
}
