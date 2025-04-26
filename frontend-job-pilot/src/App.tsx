
import './App.css'
import { AppRoutes } from './routes/AppRoutes'
import { Toaster } from 'sonner'

function App() {
 

  return (
    <>
      <AppRoutes />
      <Toaster
        position="top-right"
        richColors
      />
    </>
  )
}

export default App
