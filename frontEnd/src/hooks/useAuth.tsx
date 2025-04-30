import { useContext } from 'react'
import { authContext } from '../Auth/AuthProvider'

export default function useAuth() {
  return useContext(authContext)
}
