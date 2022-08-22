import { RootState } from 'store'
import IUser from 'models/IUser'

export const selectUser = (state: RootState): IUser => state.auth.user
