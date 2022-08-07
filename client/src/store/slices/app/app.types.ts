import ITheme from 'themes/theme.model'

export default interface AppState {
  theme: ITheme
  commonPagesLists: PagesListState
  favoritePagesLists: PagesListState
  sidebar: SidebarState
  selectedView: PageView
}

export type PageView = 'Board' | 'Gallery' | 'List' | 'Calendar'

export interface PagesListState {
  isOpen: boolean
}

export interface SidebarState {
  width: number
  isOpen: boolean
}
