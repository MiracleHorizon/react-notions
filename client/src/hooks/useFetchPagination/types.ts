import IPage from 'models/page/IPage'
import IDecorList from 'models/decor/IDecorList'

export default interface UseFetchPaginationParams {
  kind: FetchKind
  node: HTMLDivElement | null
  offsetValue: number
  listId?: string
  excludePageId?: string
  debouncedValue?: string
  handleScrollOffset?: () => void
}

export enum FetchKind {
  QUICK_SEARCH = 'quickSearch',
  SEARCH_DELETED_PAGES = 'searchDeletedPages',
  SEARCH_PAGES_BY_LIST = 'searchPagesByList',
  GALLERY_LISTS = 'galleryLists',
  EMOJI_LISTS = 'emojiLists',
  MOVE_PAGE = 'movePage',
}

export type TPaginationEntity = IPage[] | IDecorList[]

export interface FetchPaginationState {
  fetching: boolean
  entities: any[]
  totalEntities: number
  offset: number
}

export interface FetchPaginationAction {
  type: FetchPaginationKind
  payload?: FetchPaginationActionPayload
}

export enum FetchPaginationKind {
  START_FETCHING = 'startFetching',
  SET_DEFAULT = 'setDefault',
  SET_SEARCH = 'setSearch',
  ERROR = 'error',
  REFRESH = 'refresh',
}

export interface FetchPaginationActionPayload {
  entities: TPaginationEntity
  offset: number
  total: number
}
