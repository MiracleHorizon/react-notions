import { useCallback, useEffect, useMemo, useState } from 'react'

import {
  useLazyGetDeletedPagesQuery,
  useLazySearchDeletedPagesQuery,
} from 'services/notions.api'
import IPage from 'models/page/IPage'
import { useSelector } from 'react-redux'
import { selectUser } from '../store/slices/user/auth.selectors'
import {
  useLazyGetCoversListsQuery,
  useLazyGetEmojiListsQuery,
} from '../services/decor.api'
import IDecorList from '../models/decor/IDecorList'

interface Params {
  kind: FetchKind
  node: HTMLDivElement | null
  debouncedValue?: string
  offsetValue: number
  handleScrollOffset: () => void
}

export enum FetchKind {
  DELETED_PAGES = 'deletedPages',
  SEARCH_DELETED_PAGES = 'searchDeletedPages',
  GALLERY_LISTS = 'galleryLists', //* Covers
  EMOJI_LISTS = 'emojiLists',
}

type Entity = IPage[] | IDecorList[]

export default function useFetchPagination({
  kind,
  node,
  offsetValue,
  debouncedValue,
  handleScrollOffset,
}: Params) {
  const [entities, setEntities] = useState<Entity>([])
  const [totalEntities, setTotalEntities] = useState<number>(0)
  const [fetching, setFetching] = useState<boolean>(true)
  const [offset, setOffset] = useState<number>(0)
  const user = useSelector(selectUser)
  const defaultParams = useMemo(() => {
    return {
      author: user._id,
      offset,
    }
  }, [offset, user._id])

  const [
    getDeletedPages,
    { data: delPagesData, isSuccess: isDelPagesResSuccess },
  ] = useLazyGetDeletedPagesQuery()
  const [
    searchDeletedPages,
    { data: searchDelPagesData, isSuccess: isSearchDelPagesResSuccess },
  ] = useLazySearchDeletedPagesQuery()
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
      isLoading: isEmojiListsResLoading,
      isSuccess: isEmojiListsResSuccess,
      isError: isEmojiListsResError,
    },
  ] = useLazyGetEmojiListsQuery()

  const handleScroll = useCallback(() => {
    if (!node) return

    const nodeScrollHeight = node.scrollHeight
    const nodeScrollTop = node.scrollTop
    const nodeVisible = node.clientHeight
    const isOnBottom = nodeScrollHeight - (nodeScrollTop + nodeVisible) < 10

    if (isOnBottom && totalEntities > entities.length) {
      setFetching(true)
    }

    handleScrollOffset()
  }, [node, totalEntities, entities.length, handleScrollOffset])

  useEffect(() => {
    if (!fetching) return

    switch (kind) {
      case FetchKind.DELETED_PAGES: {
        if (debouncedValue !== undefined && debouncedValue === '') {
          getDeletedPages(defaultParams)
        }
        break
      }

      case FetchKind.SEARCH_DELETED_PAGES: {
        if (debouncedValue !== undefined && debouncedValue !== '') {
          searchDeletedPages({ query: debouncedValue, ...defaultParams })
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
    fetching,
    defaultParams,
    debouncedValue,
    getEmojiLists,
    getCoversLists,
    getDeletedPages,
    searchDeletedPages,
  ])

  useEffect(() => {
    switch (kind) {
      case FetchKind.DELETED_PAGES: {
        if (debouncedValue !== '') return

        if (isDelPagesResSuccess && delPagesData) {
          const { pages, total } = delPagesData

          setEntities([...entities, ...pages] as IPage[])
          setTotalEntities(total)
          setOffset(prev => prev + offsetValue)
          setFetching(false)
        }

        if (!isDelPagesResSuccess) setEntities([]) //!

        break
      }

      case FetchKind.SEARCH_DELETED_PAGES: {
        if (debouncedValue === '') return

        if (isSearchDelPagesResSuccess && searchDelPagesData) {
          const { pages, total } = searchDelPagesData
          const uniqPages = Array.from(new Set([...entities, ...pages]))

          setEntities(uniqPages as IPage[])
          setTotalEntities(total)
          setOffset(prev => prev + offsetValue)
          setFetching(false)
        }

        if (!isSearchDelPagesResSuccess) setEntities([]) //!

        break
      }

      case FetchKind.GALLERY_LISTS: {
        if (isCoverListsResSuccess && coverListsData) {
          const { lists, total } = coverListsData

          setEntities([...entities, ...lists] as IDecorList[])
          setTotalEntities(total)
          setOffset(prev => prev + offsetValue)
          setFetching(false)
        }

        if (isCoverListsResError) setEntities([])

        break
      }

      case FetchKind.EMOJI_LISTS: {
        if (isEmojiListsResSuccess && emojiListsData) {
          const { lists, total } = emojiListsData

          setEntities([...entities, ...lists] as IDecorList[])
          setTotalEntities(total)
          setOffset(prev => prev + offsetValue)
          setFetching(false)
        }

        if (isEmojiListsResError) setEntities([])

        break
      }
    }
    // eslint-disable-next-line
  }, [
    isDelPagesResSuccess,
    isSearchDelPagesResSuccess,
    isCoverListsResSuccess,
    isCoverListsResError,
    isEmojiListsResSuccess,
    isEmojiListsResError,
    delPagesData,
    searchDelPagesData,
    coverListsData,
    emojiListsData,
    debouncedValue,
    offsetValue,
    kind,
  ])

  useEffect(() => {
    node?.addEventListener('scroll', handleScroll)

    return () => {
      node?.removeEventListener('scroll', handleScroll)
    }
  }, [node, handleScroll])

  switch (kind) {
    case FetchKind.DELETED_PAGES:
      return { pages: entities as IPage[], isSuccess: isDelPagesResSuccess }
    case FetchKind.SEARCH_DELETED_PAGES:
      return {
        pages: entities as IPage[],
        isLoading: isCoverListsResLoading,
        isSuccess: isSearchDelPagesResSuccess,
        isError: isCoverListsResError,
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
