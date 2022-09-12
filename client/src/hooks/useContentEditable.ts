import { KeyboardEvent, RefObject, useRef } from 'react'
import { ContentEditableEvent } from 'react-contenteditable'
import { useSelector } from 'react-redux'

import useActions from './useActions'
import useTypedSelector from './useTypedSelector'
import {
  useCreateItemMutation,
  useDeleteItemMutation,
  useUpdateItemMutation,
} from 'services/notions.api'
import { selectUser } from 'store/slices/user/auth.selectors'
import INotionContentItem from 'models/pageContent/INotionContentItem'
import NotionContentItem from 'models/pageContent/NotionContentItem'
import NotionContentItemTypes from 'models/pageContent/NotionContentItemTypes'
import IPage from 'models/page/IPage'

type TFunc = (value: string) => void

interface Params {
  initialValue: string
  func: TFunc
  ref?: RefObject<HTMLDivElement>
  item?: INotionContentItem
  page?: IPage
}

export default function useContentEditable({
  initialValue,
  func,
  ref,
  item,
  page,
}: Params) {
  const {
    openCreateNotionContentItemModal,
    closeCreateNotionContentItemModal,
  } = useActions()
  const value = useRef<string>(initialValue)
  const { isOpen } = useTypedSelector(s => s.modals.createNotionContentItem)
  const [createContentItem] = useCreateItemMutation()
  const [updateContentItem] = useUpdateItemMutation()
  const [deleteContentItem] = useDeleteItemMutation()
  const user = useSelector(selectUser)

  const handleChange = (e: ContentEditableEvent) => {
    value.current = e.target.value

    if (!item || !ref || initialValue === value.current) return
    const lastWord = e.target.value.split(' ').pop()

    if (
      (lastWord?.startsWith('/') || e.target.value.endsWith('/')) &&
      !isOpen
    ) {
      const invokerRect = ref.current?.getBoundingClientRect().toJSON()
      const params = {
        parentItemId: item.parentItemId ? item.parentItemId : undefined,
        invokerRect,
        item,
      }

      openCreateNotionContentItemModal(params)
    } else {
      closeCreateNotionContentItemModal()
    }

    if (lastWord?.startsWith('/') && lastWord.length > 5) {
      closeCreateNotionContentItemModal()
    }

    if (e.target.value === '') {
      closeCreateNotionContentItemModal()
    }
  }

  const handleEnterKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.code === 'Enter' && value.current !== initialValue) {
      e.preventDefault()
      func(value.current)
    }

    if (e.code === 'Escape') {
      ref?.current?.blur()
      func(value.current)
    }

    // Обработка Notion content item.
    if (!item || !page) return

    const { _id, order } = item
    const { content } = page

    if (e.code === 'ArrowUp' && e.ctrlKey && order !== 0) {
      updateContentItem({ _id, body: { order: order - 1 } })
    }

    if (e.code === 'ArrowDown' && e.ctrlKey && order + 1 !== content.length) {
      updateContentItem({ _id, body: { order: order + 1 } })
    }

    if (e.code === 'Backspace' && value.current === '') deleteContentItem(_id)

    if (e.code === 'Enter') {
      e.preventDefault()

      const body = {
        type: NotionContentItemTypes.TEXT,
        parentPageId: page._id,
        parentItemId: item.parentItemId ? item.parentItemId : undefined,
        order: item.order + 1,
        author: user._id,
      }

      createContentItem(NotionContentItem.createItem(body))
    }
  }

  const handleBlur = () => {
    if (value.current !== initialValue) func(value.current)
  }

  return {
    value: value.current,
    handleChange,
    handleEnterKey,
    handleBlur,
  }
}
