import { useCallback, useEffect, useMemo, useReducer } from 'react'
import { useSelector } from 'react-redux'

import {
  useLazySearchDeletedPagesQuery,
  useLazySearchPagesByListQuery,
  useLazySearchPagesQuery,
  useLazySearchPagesToMoveQuery,
} from 'services/notions.api'
import {
  useLazyGetCoversListsQuery,
  useLazyGetEmojiListsQuery,
} from 'services/decor.api'
import useFetchPaginationReducer from './reducer'
import { selectUser } from 'store/slices/user/auth.selectors'
import IPage from 'models/page/IPage'
import IDecorList from 'models/decor/IDecorList'
import Params, {
  FetchKind,
  FetchPaginationKind,
} from './types'

export default function useFetchPagination({
  kind,
  node,
  listId,
  offsetValue,
  debouncedValue,
  handleScrollOffset,
  excludePageId,
}: Params) {
  const user = useSelector(selectUser)

  const defaultState = useMemo(() => {
    return {
      fetching: true,
      entities: [],
      totalEntities: 0,
      offset: 0,
    }
  }, [])

  const [{ fetching, entities, totalEntities, offset }, dispatch] = useReducer(
    useFetchPaginationReducer,
    defaultState
  )

  const defaultParams = useMemo(() => {
    return {
      author: user._id,
      offset,
    }
  }, [offset, user._id])

  const [
    searchPages,
    {
      data: searchPagesData,
      isLoading: isSearchPagesResLoading,
      isSuccess: isSearchPagesResSuccess,
      isError: isSearchPagesResError,
    },
  ] = useLazySearchPagesQuery()

  const [
    searchDeletedPages,
    {
      data: searchDelPagesData,
      isSuccess: isSearchDelPagesResSuccess,
      isError: isSearchDelPagesResError,
    },
  ] = useLazySearchDeletedPagesQuery()

  const [
    searchPagesByList,
    {
      data: searchPagesByListData,
      isLoading: isSearchPagesByListLoading,
      isSuccess: isSearchPagesByListSuccess,
      isError: isSearchPagesByListError,
    },
  ] = useLazySearchPagesByListQuery()

  const [
    getCoversLists,
    {
      data: coverListsData,
      isLoading: isCoverListsResLoading,
      isSuccess: isCoverListsResSuccess,
      isError: isCoverListsResError,
    },
  ] = useLazyGetCoversListsQuery()

  const [
    getEmojiLists,
    {
      data: emojiListsData,
      isSuccess: isEmojiListsResSuccess,
      isError: isEmojiListsResError,
    },
  ] = useLazyGetEmojiListsQuery()

  const [
    searchPagesToMove,
    {
      data: searchPagesToMoveData,
      isLoading: isSearchPagesToMoveResLoading,
      isSuccess: isSearchPagesToMoveResSuccess,
      isError: isSearchPagesToMoveResError,
    },
  ] = useLazySearchPagesToMoveQuery()

  const handleScroll = useCallback(() => {
    if (!node) return

    const nodeScrollHeight = node.scrollHeight
    const nodeScrollTop = node.scrollTop
    const nodeVisible = node.clientHeight
    const isOnBottom = nodeScrollHeight - (nodeScrollTop + nodeVisible) < 15

    if (isOnBottom && totalEntities > entities.length) {
      dispatch({ type: FetchPaginationKind.START_FETCHING })
    }

    handleScrollOffset && handleScrollOffset()
  }, [node, totalEntities, entities.length, handleScrollOffset])

  useEffect(() => {
    if (!fetching) return

    switch (kind) {
      case FetchKind.QUICK_SEARCH: {
        if (debouncedValue !== undefined) {
          searchPages({ query: debouncedValue, ...defaultParams })
        }
        break
      }

      case FetchKind.SEARCH_DELETED_PAGES: {
        if (debouncedValue !== undefined) {
          searchDeletedPages({ query: debouncedValue, ...defaultParams })
        }
        break
      }

      case FetchKind.SEARCH_PAGES_BY_LIST: {
        if (debouncedValue !== undefined && listId) {
          searchPagesByList({
            query: debouncedValue,
            listId,
            offset,
          })
        }
        break
      }

      case FetchKind.MOVE_PAGE: {
        if (debouncedValue !== undefined && excludePageId) {
          searchPagesToMove({
            query: debouncedValue,
            excludePageId,
            ...defaultParams,
          })
        }
        break
      }

      case FetchKind.GALLERY_LISTS:
        getCoversLists({ offset })
        break

      case FetchKind.EMOJI_LISTS:
        getEmojiLists({ offset })
    }
  }, [
    kind,
    offset,
    listId,
    fetching,
    defaultParams,
    excludePageId,
    debouncedValue,
    getEmojiLists,
    getCoversLists,
    searchPages,
    searchPagesByList,
    searchDeletedPages,
    searchPagesToMove,
  ])

  useEffect(() => {
    switch (kind) {
      case FetchKind.QUICK_SEARCH: {
        if (isSearchPagesResSuccess && searchPagesData) {
          const { pages, total } = searchPagesData
          const payload = {
            offset: offsetValue,
            entities: pages,
            total,
          }

          dispatch({ type: FetchPaginationKind.SET_SEARCH, payload })
        }

        if (isSearchPagesResError) {
          dispatch({ type: FetchPaginationKind.ERROR })
        }

        break
      }

      case FetchKind.SEARCH_PAGES_BY_LIST: {
        if (isSearchPagesByListSuccess && searchPagesByListData) {
          const { pages, total } = searchPagesByListData
          const payload = {
            offset: offsetValue,
            entities: pages,
            total,
          }

          dispatch({ type: FetchPaginationKind.SET_SEARCH, payload })
        }

        if (isSearchPagesByListError) {
          dispatch({ type: FetchPaginationKind.ERROR })
        }

        break
      }

      case FetchKind.SEARCH_DELETED_PAGES: {
        if (isSearchDelPagesResSuccess && searchDelPagesData) {
          const { pages, total } = searchDelPagesData
          const payload = {
            offset: offsetValue,
            entities: pages,
            total,
          }

          dispatch({ type: FetchPaginationKind.SET_SEARCH, payload })
        }

        if (isSearchDelPagesResError) {
          dispatch({ type: FetchPaginationKind.ERROR })
        }

        break
      }

      case FetchKind.MOVE_PAGE: {
        if (isSearchPagesToMoveResSuccess && searchPagesToMoveData) {
          const { pages, total } = searchPagesToMoveData
          const payload = {
            offset: offsetValue,
            entities: pages,
            total,
          }

          dispatch({ type: FetchPaginationKind.SET_SEARCH, payload })
        }

        if (isSearchPagesToMoveResError) {
          dispatch({ type: FetchPaginationKind.ERROR })
        }

        break
      }

      case FetchKind.GALLERY_LISTS: {
        if (isCoverListsResSuccess && coverListsData) {
          const { lists, total } = coverListsData
          const payload = {
            offset: offsetValue,
            entities: lists,
            total,
          }

          dispatch({ type: FetchPaginationKind.SET_DEFAULT, payload })
        }

        if (isCoverListsResError) {
          dispatch({ type: FetchPaginationKind.ERROR })
        }

        break
      }

      case FetchKind.EMOJI_LISTS: {
        if (isEmojiListsResSuccess && emojiListsData) {
          const { lists, total } = emojiListsData
          const payload = {
            offset: offsetValue,
            entities: lists,
            total,
          }

          dispatch({ type: FetchPaginationKind.SET_DEFAULT, payload })
        }

        if (isEmojiListsResError) {
          dispatch({ type: FetchPaginationKind.ERROR })
        }

        break
      }
    }
  }, [
    isSearchPagesResSuccess,
    isSearchPagesResError,
    isSearchPagesByListError,
    isSearchPagesByListSuccess,
    isSearchDelPagesResSuccess,
    isSearchDelPagesResError,
    isSearchPagesToMoveResSuccess,
    isSearchPagesToMoveResError,
    isCoverListsResSuccess,
    isCoverListsResError,
    isEmojiListsResSuccess,
    isEmojiListsResError,
    searchPagesData,
    searchDelPagesData,
    searchPagesByListData,
    searchPagesToMoveData,
    coverListsData,
    emojiListsData,
    debouncedValue,
    offsetValue,
    kind,
  ])

  useEffect(() => {
    if (debouncedValue !== undefined) {
      dispatch({ type: FetchPaginationKind.REFRESH })
    }
  }, [debouncedValue])

  useEffect(() => {
    node?.addEventListener('scroll', handleScroll)

    return () => {
      node?.removeEventListener('scroll', handleScroll)
    }
  }, [node, handleScroll])

  switch (kind) {
    case FetchKind.QUICK_SEARCH:
      return {
        pages: entities as IPage[],
        isLoading: isSearchPagesResLoading,
        isSuccess: isSearchPagesResSuccess,
        isError: isSearchPagesResError,
      }

    case FetchKind.SEARCH_PAGES_BY_LIST:
      return {
        pages: entities as IPage[],
        total: totalEntities,
        isLoading: isSearchPagesByListLoading,
        isSuccess: isSearchPagesByListSuccess,
        isError: isSearchPagesByListError,
      }

    case FetchKind.SEARCH_DELETED_PAGES:
      return {
        pages: entities as IPage[],
        isLoading: isCoverListsResLoading,
        isSuccess: isSearchDelPagesResSuccess,
        isError: isCoverListsResError,
      }

    case FetchKind.MOVE_PAGE:
      return {
        pages: entities as IPage[],
        isLoading: isSearchPagesToMoveResLoading,
        isSuccess: isSearchPagesToMoveResSuccess,
        isError: isSearchPagesToMoveResError,
      }

    case FetchKind.GALLERY_LISTS:
      return {
        coverLists: entities as IDecorList[],
        isSuccess: isCoverListsResSuccess,
      }

    case FetchKind.EMOJI_LISTS:
      return {
        emojiLists: entities as IDecorList[],
        isSuccess: isEmojiListsResSuccess,
      }
  }
}
