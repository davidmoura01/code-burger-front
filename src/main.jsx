import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './routes/routes'
import { UserProvider } from './hooks/UserContext'

import { ToastContainer } from 'react-toastify'


import GlobalStyles from './styles/globalStyles.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
    <Routes />
    </UserProvider>
    <ToastContainer autoClose={2000} theme='colored' />
    <GlobalStyles />
  </React.StrictMode>,
)
