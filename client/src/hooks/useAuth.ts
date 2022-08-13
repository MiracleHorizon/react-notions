import { useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { AuthContext } from 'context/Auth'

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
