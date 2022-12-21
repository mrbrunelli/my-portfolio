import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css'

import Routes from './routes'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  )
}

export default App
