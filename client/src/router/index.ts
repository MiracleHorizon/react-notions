import { FC } from 'react'
import RegisterPage from 'pages/Register'
import LoginPage from 'pages/Login'
import ResetPasswordPage from 'pages/ResetPassword'
import ActivateAccountPage from 'pages/ActivateAccount'
import NotionPage from 'pages/Notion'

export interface IRoute {
  path: string
  element: FC
}

enum PublicRoutes {
  REGISTER = '/register',
  LOGIN = '/login',
  RESET_PASSWORD = '/reset',
}

enum PrivateRoutes {
  NOTION = '/workspace/:id',
  ACTIVATE_ACCOUNT = '/activate',
}

export const publicRoutes: IRoute[] = [
  { path: PublicRoutes.REGISTER, element: RegisterPage },
  { path: PublicRoutes.LOGIN, element: LoginPage },
  { path: PublicRoutes.RESET_PASSWORD, element: ResetPasswordPage },
]

export const privateRoutes: IRoute[] = [
  { path: PrivateRoutes.ACTIVATE_ACCOUNT, element: ActivateAccountPage },
  { path: PrivateRoutes.NOTION, element: NotionPage },
]
