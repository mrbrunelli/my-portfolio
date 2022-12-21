import { Overlay } from '../Overlay'
import './styles.css'

export const Error: React.FC = (props) => {
  return (
    <Overlay>
      <div className='error'>
        <p>Content temporarily unavailable...</p>
        <button onClick={() => window.location.reload()}>Reload</button>
      </div>
    </Overlay>
  )
}
