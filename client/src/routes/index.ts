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

export enum RouteNames {
  HOME = '/',
  REGISTER = '/register',
  LOGIN = '/login',
  WORKSPACE = '/workspace',
  NOTION = '/workspace/:id',
  NOTION_TASK = 'workspace/:id/task/:id',
}

export const publicRoutes: IRoute[] = [
  { path: RouteNames.HOME, element: HomePage },
  { path: RouteNames.REGISTER, element: RegisterPage },
  { path: RouteNames.LOGIN, element: LoginPage },
]

export const privateRoutes: IRoute[] = [
  { path: RouteNames.WORKSPACE, element: WorkspacePage },
  { path: RouteNames.NOTION, element: NotionPage },
  { path: RouteNames.NOTION_TASK, element: NotionTaskPage },
]
