import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import AuthState from './auth.types'
import IAuthResponse from 'models/api/response/IAuthResponse'
import IUser from 'models/IUser'
import IUpdateUserBody from '../../../models/api/user/IUpdateUserBody'

const initialState: AuthState = {
  user: {} as IUser,
  isAuth: false,
}

const authSlice = createSlice({
  name: 'user',

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
    },

    updateUser(state, action: PayloadAction<IUpdateUserBody>) {
      if (action.payload.email) {
        state.user.email = action.payload.email
      }

      if (action.payload.avatarUrl) {
        state.user.avatarUrl = action.payload.avatarUrl
      }

      if (action.payload.fullName) {
        state.user.fullName = action.payload.fullName
      }
    },
  },
})

export const { login, register, setAuthCheck, logout, updateUser } =
  authSlice.actions

export default authSlice.reducer
