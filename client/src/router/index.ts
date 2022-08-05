import { FC } from 'react'
import HomePage from 'pages/Home'
import RegisterPage from 'pages/Register'
import LoginPage from 'pages/Login'
import WorkspacePage from 'pages/Workspace'
import NotionPage from 'pages/Notion'
import NotionTaskPage from 'pages/NotionTask'

export interface IRoute {
  path: string
  element: FC
}

export enum RouteName {
  HOME = '/',
  REGISTER = '/register',
  LOGIN = '/login',
  WORKSPACE = '/workspace',
  NOTION = '/workspace/:id',
  NOTION_TASK = 'workspace/:id/task/:id',
}

export const publicRoutes: IRoute[] = [
  { path: '/', element: HomePage },
  { path: '/register', element: RegisterPage },
  { path: '/login', element: LoginPage },
]

export const privateRoutes: IRoute[] = [
  { path: '/workspace', element: WorkspacePage },
  { path: '/workspace/:id', element: NotionPage },
  { path: '/workspace/:id/task/:id', element: NotionTaskPage },
]
