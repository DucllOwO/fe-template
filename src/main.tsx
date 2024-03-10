import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MyRoutes from './routers/route.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MyRoutes></MyRoutes>
  </React.StrictMode>,
)
