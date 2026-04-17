import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes.jsx'
import TimlineProvider from './context/timeline/TimlineContext.jsx'
import { Toaster } from 'react-hot-toast'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TimlineProvider>
      <RouterProvider router={router} />
      <Toaster position='top-center' />
    </TimlineProvider>
    {/* <App /> */}
  </StrictMode>,
)
