import { Overlay } from '../Overlay'
import './styles.css'

export const Error: React.FC = (props) => {
  return (
    <Overlay>
      <div className='error'>
        <p>Error to load content...</p>
        <button onClick={() => window.location.reload()}>Reload</button>
      </div>
    </Overlay>
  )
}
