import { createContext } from 'react'
export type AuthContextType = {
  handleGp: () => Promise<void>
  handleLogout: () => Promise<void>
  dev: string
  devS: boolean
  loading: boolean
  user: {
    displayName: string
    email: string
    photoURL: string
  } | null
}

export const AuthContext = createContext<AuthContextType | null>(null)
