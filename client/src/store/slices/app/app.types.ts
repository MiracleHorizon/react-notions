import ITheme, { Theme } from 'themes/theme.model'

export default interface AppState {
  themeState: ThemeState
  selectedView: PageView
  startOpen: StartOpenOptionEnum
  lastPageId: string | null
  sidebar: SidebarState
  favoritePagesLists: PagesListState
  commonPagesLists: PagesListState
}

export type PageView = 'Board' | 'Gallery' | 'List' | 'Calendar'

export interface ThemeState {
  theme: ITheme
  title: Theme
}

export interface PagesListState {
  isOpen: boolean
}

export interface SidebarState {
  width: number
  isOpen: boolean
}

export enum StartOpenOptionEnum {
  LAST_PAGE = 'Last visited page',
  TOP_SIDEBAR_PAGE = 'Top page in sidebar',
}
