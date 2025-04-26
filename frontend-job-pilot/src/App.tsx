
import './App.css'
import { AppRoutes } from './routes/AppRoutes'
import { Toaster } from 'sonner'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
        <Toaster
          position="top-right"
          richColors
        />
      </QueryClientProvider>
    </>
  )
}

export default App
