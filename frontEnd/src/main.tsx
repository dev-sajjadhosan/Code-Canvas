import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from 'react-router-dom'
import './index.css'
import Home from './pages/Home/Home.tsx'
import Layout from './Layout.tsx'
import DetailPage from './pages/DetailPage/DetailPage.tsx'
import Dashboard from './Dashboard/Dashboard.tsx'
import DevRoutes from './Routes/DevRoutes.tsx'
import AuthProvider from './Auth/AuthProvider.tsx'
import DashboardProve from './Dashboard/DashboardProve.tsx'
import SideNav from './components/SideNav.tsx'
import AddProject from './pages/AddProject/AddProject.tsx'
import ListProject from './pages/ListProjects/ListProjects.tsx'
import ProjectActivity from './pages/ProjectActivity/ProjectActivity.tsx'
import DeployProject from './pages/Deploy/Deploy.tsx'
import Setting from './pages/Setting/Setting.tsx'
import Logout from './pages/Logout/Logout.tsx'

// const routers = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '/',
//         element: <Home />,
//       },
//       {
//         path: 'detail-page/:id',
//         element: <DetailPage />,
//       },
//     ],
//   },
//   {
//     path: '/dashboard-login',
//     element: <DashboardProve />,
//   },
//   {
//     path: '/dashboard',
//     element: (
//       <DevRoutes>
//         <Dashboard />
//       </DevRoutes>
//     ),
//     children: [
//       {
//         path: '/dashboard',
//         element: '',
//       },
//     ],
//   },
// ])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/detail-page/:id" element={<DetailPage />} />
          <Route path="/dashboard-login" element={<DashboardProve />} />

          <Route
            path="/dashboard"
            element={
              <DevRoutes>
                <Dashboard />
              </DevRoutes>
            }
          >
            <Route path="add-project" element={<AddProject />} />
            <Route path="list-project" element={<ListProject />} />
            <Route path="project-activity" element={<ProjectActivity />} />
            <Route path="deploy-project" element={<DeployProject />} />
            <Route path="setting" element={<Setting />} />
            <Route path="logout" element={<Logout />} />
          </Route>

          {/* <Route path="/" element={<Home />} /> */}
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
