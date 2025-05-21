import { useContext } from 'react'
import { AuthContext } from '../types/types'

export default function useAuth() {
  return useContext(AuthContext)
}
