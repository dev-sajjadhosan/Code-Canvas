import { Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

import { ReactNode } from 'react'

interface DevRoutesProps {
  children: ReactNode
}

const DevRoutes = ({ children }: DevRoutesProps) => {
  const auth = useAuth()
  if (!auth || auth.loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="card p-10">
          <span className="loading loading-dots loading-xl"></span>
        </div>
      </div>
    )
  if (auth.dev === 'devsajjadhosan@gmail.com') return <>{children}</>
  else return <Navigate to={'/'} />
}

export default DevRoutes
