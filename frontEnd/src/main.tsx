import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import './index.css'
import Home from './pages/Home/Home.tsx'
import Layout from './Layout.tsx'
import DetailPage from './pages/DetailPage/DetailPage.tsx'
import Dashboard from './Dashboard/Dashboard.tsx'
import DevRoutes from './Routes/DevRoutes.tsx'
import AuthProvider from './Auth/AuthProvider.tsx'
import DashboardProve from './Dashboard/DashboardProve.tsx'

const routers = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'detail-page/:id',
        element: <DetailPage />,
      },
    ],
  },
  {
    path: '/dashboard-login',
    element: <DashboardProve />,
  },
  {
    path: '/dashboard',
    element: (
      <DevRoutes>
        <Dashboard />
      </DevRoutes>
    ),
    children: [
      {
        path: '/dashboard',
        element: '',
      },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={routers} />
    </AuthProvider>
  </StrictMode>,
)
