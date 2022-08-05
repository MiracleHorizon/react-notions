import { useContext } from 'react'
import { AuthContext } from 'context/AuthContext'
import { useAuthState } from 'react-firebase-hooks/auth'
import firebase from 'firebase/compat/app'

type AuthState = [firebase.User, boolean, Error | undefined]
type Result = AuthState | null | undefined

export default function useAuth() {
  const { fbAuth } = useContext(AuthContext)
  // @ts-ignore
  const [user, loading, error] = useAuthState(fbAuth)

  return {
    user,
    loading,
    error,
  }
}
