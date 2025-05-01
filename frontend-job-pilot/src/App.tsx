
import './App.css'
import { AppRoutes } from './routes/AppRoutes'
import { Toaster } from 'sonner'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import CombineContext from './context/CombineContext'
import './utils/i18n'

const queryClient = new QueryClient()

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <CombineContext>
          <AppRoutes />
          <Toaster
            position="top-right"
            richColors
          />
        </CombineContext>
      </QueryClientProvider>
    </>
  )
}

export default App
