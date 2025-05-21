import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import { ReactNode, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import app from '../../firebase/firebase'
import { AuthContext } from '../types/types'

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<{
    displayName: string
    email: string
    photoURL: string
  } | null>(null)
  const [dev, setDev] = useState<string>('')
  const [devS, setDevS] = useState<boolean>(false)
  const [loading, setLoading] = useState(true)
  const auth = getAuth(app)
  const gP = new GoogleAuthProvider()
  const navigate = useNavigate()

  useEffect(() => {
    document.body.addEventListener('keyup', (e) => {
      if (e.ctrlKey && e.altKey && e.key.toLowerCase() === 's') {
        setDevS(true)
      }
    })
    const unSub = onAuthStateChanged(auth, (c) => {
      if (c) {
        setUser({
          displayName: c.displayName ?? '',
          email: c.email ?? '',
          photoURL: c.photoURL ?? '',
        })
        setDev(c.email ?? '')
      } else {
        setUser(null)
        setDev('')
      }
      setLoading(false)
    })

    return () => unSub()
  }, [auth])

  const handleGp = async () => {
    return signInWithPopup(auth, gP).then(() => {
      navigate('/dashboard')
    })
  }

  const handleLogout = async () => {
    return signOut(auth)
  }

  const contextValues = { handleGp, handleLogout, dev, devS, loading, user }

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
