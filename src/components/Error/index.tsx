import './styles.css'

export const Error = () => {
  return (
    <div className='error'>
      <p>Content temporarily unavailable...</p>
      <button onClick={() => window.location.reload()}>Reload</button>
    </div>
  )
}
