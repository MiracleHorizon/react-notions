import { ITheme } from 'themes/theme.model'

export default interface AppState {
  theme: ITheme
  commonPagesLists: PagesListState
  favoritePagesLists: PagesListState
  leftSidebar: SidebarState
  rightSidebar: RightSidebarState
  selectedView: PageView
}

export type SidebarLocation = 'left' | 'right'
export type TCommentsFilter = 'Open' | 'Resolved'
export type PageView = 'Board' | 'Gallery' | 'List' | 'Calendar'

export interface PagesListState {
  isOpen: boolean
}

export interface SidebarState {
  width: number
  isOpen: boolean
  readonly location: SidebarLocation
}

export interface RightSidebarState extends SidebarState {
  activeCommentsFilter: TCommentsFilter
}
