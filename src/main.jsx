
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes'
import React from 'react'
import { Toaster } from 'react-hot-toast'
import AuthProvider from './provider/AuthProvider'






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <div className='max-w-6xl mx-auto'> <RouterProvider router={router} /> <Toaster></Toaster> </div>
    </AuthProvider>

  </React.StrictMode>,
)
