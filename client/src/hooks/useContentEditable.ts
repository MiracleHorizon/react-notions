import { KeyboardEvent, RefObject, useRef } from 'react'
import { ContentEditableEvent } from 'react-contenteditable'

import useActions from './useActions'
import {
  useCreateItemMutation,
  useDeleteItemMutation,
  useUpdateItemMutation,
} from 'services/pages.api'
import INotionContentItem from 'models/pageContent/INotionContentItem'
import IPage from 'models/page/IPage'

type TFunc = (value: string) => void

export default function useContentEditable(
  initialValue: string,
  func: TFunc,
  ref?: RefObject<HTMLDivElement>,
  item?: INotionContentItem,
  page?: IPage | null
) {
  const value = useRef<string>(initialValue)
  const [createContentItem] = useCreateItemMutation()
  const [updateContentItem] = useUpdateItemMutation()
  const [deleteContentItem] = useDeleteItemMutation()
  const {
    openCreateNotionContentItemModal,
    closeCreateNotionContentItemModal,
  } = useActions()

  const handleChange = (e: ContentEditableEvent) => {
    value.current = e.target.value

    if (!item || !ref || initialValue === value.current) return
    const lastWord = e.target.value.split(' ').pop()

    if (lastWord?.startsWith('/')) {
      const invokerRect = ref.current?.getBoundingClientRect().toJSON()
      openCreateNotionContentItemModal({ item, invokerRect })
    } else {
      closeCreateNotionContentItemModal()
    }

    if (lastWord?.startsWith('/') && lastWord.length > 5) {
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
      // createContentItem({parentItemId})
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
