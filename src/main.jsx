import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Error404 from './Pages/Error404.jsx'
import ComponentsPage from './Pages/ComponentsPage/ComponentsPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error404/>
  },
  {
    path:'/Components',
    element: <ComponentsPage/>,
    errorElement: <Error404/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
