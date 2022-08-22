import ITheme, { Theme } from 'themes/theme.model'

export default interface AppState {
  themeState: ThemeState
  commonPagesLists: PagesListState
  favoritePagesLists: PagesListState
  sidebar: SidebarState
  selectedView: PageView
  startOpen: StartOpenOptionEnum
  lastPageId: string | null
  loadings: {
    savePage: boolean
  }
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
