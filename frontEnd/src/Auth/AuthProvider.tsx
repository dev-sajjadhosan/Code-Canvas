import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import {
  createContext,
  ReactNode,
  useActionState,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react'
import app from '../../firebase/firebase'
import { redirect, useNavigate } from 'react-router-dom'
import AuthContextType from '../types/types'

export const authContext = createContext<AuthContextType | null>(null)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<object | null>([])
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
      setUser(c)
      setDev(c?.email)
      setLoading(false)
    })

    return () => unSub()
  }, [auth])

  const handleGP = async () => {
    return signInWithPopup(auth, gP).then(() => {
      navigate('/dashboard')
    })
  }

  const handleLogout = async () => {
    return signOut(auth)
  }

  const contextValues = { handleGP, handleLogout, dev, devS, loading, user }

  return (
    <authContext.Provider value={contextValues}>
      {children}
    </authContext.Provider>
  )
}

export default AuthProvider
