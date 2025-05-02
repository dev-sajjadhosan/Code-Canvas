import { Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const DevRoutes = ({ children }) => {
  const { dev, loading } = useAuth()
  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="card p-10">
          <span className="loading loading-dots loading-xl"></span>
        </div>
      </div>
    )
  if (dev === 'devsajjadhosan@gmail.com') return <>{children}</>
  else return <Navigate to={'/'} />
}

export default DevRoutes
