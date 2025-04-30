import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
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
import { redirect } from 'react-router-dom'
import AuthContextType from '../types/types'

export const authContext = createContext<AuthContextType | null>(null)

const AuthProvider = ({ children }) => {
  const [dev, setDev] = useState('')
  const [devS, setDevS] = useState(false)
  const [loading, setLoading] = useState(true)
  const auth = getAuth(app)
  const gP = new GoogleAuthProvider()

  useEffect(() => {
    document.body.addEventListener('keyup', (e) => {
      if (e.ctrlKey && e.altKey && e.key.toLowerCase() === 's') {
        setDevS(true)
      }
    })

    const unSub = onAuthStateChanged(auth, (c) => {
      console.log(c)
      setDev(c?.email)
      setLoading(false)
    })

    return () => unSub()
  }, [auth])

  const handleGP = async () => {
    return signInWithPopup(auth, gP)
  }

  const contextValues = { handleGP, dev, devS,loading }

  return (
    <authContext.Provider value={contextValues}>
      {children}
    </authContext.Provider>
  )
}

export default AuthProvider
