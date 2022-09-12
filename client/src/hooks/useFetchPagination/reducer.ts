import {
  FetchPaginationAction,
  FetchPaginationKind,
  FetchPaginationState,
} from './types'

const useFetchPaginationReducer = (
  state: FetchPaginationState,
  action: FetchPaginationAction
) => {
  switch (action.type) {
    case FetchPaginationKind.START_FETCHING:
      return {
        ...state,
        fetching: true,
      }

    case FetchPaginationKind.SET_DEFAULT:
      if (action.payload) {
        return {
          fetching: false,
          totalEntities: action.payload.total,
          entities: [...state.entities, ...action.payload.entities],
          offset: (state.offset += action.payload.offset),
        }
      }

      return state

    case FetchPaginationKind.SET_SEARCH:
      if (action.payload) {
        return {
          fetching: false,
          totalEntities: action.payload.total,
          entities: action.payload.entities,
          offset: (state.offset += action.payload.offset),
        }
      }

      return state

    case FetchPaginationKind.ERROR:
      return {
        fetching: false,
        totalEntities: 0,
        entities: [],
        offset: 0,
      }

    case FetchPaginationKind.REFRESH:
      return {
        ...state,
        fetching: true,
        offset: 0,
      }

    default:
      return state
  }
}

export default useFetchPaginationReducer
