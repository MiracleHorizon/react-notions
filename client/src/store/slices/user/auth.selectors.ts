import { RootState } from 'store/index'
import IUser from 'models/IUser'

export const selectUser = (state: RootState): IUser => state.user.user
