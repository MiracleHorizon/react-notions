import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import AuthState from './auth.types'
import IUser from 'models/IUser'

const initialState: AuthState = {
  user: null,
}

const authSlice = createSlice({
  name: 'auth',

  initialState,

  reducers: {
    setUser(state, action: PayloadAction<IUser | null>) {
      state.user = action.payload
    },

    logout(state) {
      state.user = null
    },
  },
})

export const { setUser, logout } = authSlice.actions

export default authSlice.reducer

// import { getAnalytics } from 'firebase/analytics'
// const analytics = getAnalytics(app)
