import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css'

import { Router } from './router'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  )
}

export default App
