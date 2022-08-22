import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import AuthState from './auth.types'
import IAuthResponse from 'models/api/response/IAuthResponse'
import IUser from 'models/IUser'

const initialState: AuthState = {
  user: {} as IUser,
  isAuth: false,
}

const authSlice = createSlice({
  name: 'auth',

  initialState,

  reducers: {
    register(state, action: PayloadAction<IAuthResponse>) {
      state.isAuth = true
      state.user = action.payload.user
      window.localStorage.setItem('token', action.payload.refreshToken)
    },

    login(state, action: PayloadAction<IAuthResponse>) {
      state.isAuth = true
      state.user = action.payload.user
      window.localStorage.setItem('token', action.payload.refreshToken)
    },

    setAuthCheck(state, action: PayloadAction<IAuthResponse>) {
      state.isAuth = true
      state.user = action.payload.user
      window.localStorage.setItem('token', action.payload.refreshToken)
    },

    logout(state) {
      state.isAuth = false
      state.user = {} as IUser
      window.localStorage.removeItem('token')
      window.localStorage.removeItem('lastPageId')
    },
  },
})

export const { login, register, setAuthCheck, logout } = authSlice.actions

export default authSlice.reducer
