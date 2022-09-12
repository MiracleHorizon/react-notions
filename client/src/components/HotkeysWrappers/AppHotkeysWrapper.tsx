import React, { FC } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useEventListener } from 'usehooks-ts'

import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import { useUpdatePageMutation } from 'services/notions.api'

const AppHotkeysWrapper: FC<{ children: JSX.Element }> = ({ children }) => {
  const { toggleQuickSearchModal, toggleAppSettingsModal, toggleSidebar } = useActions()
  const { page: currentPage } = useTypedSelector(s => s.notions)
  const [updatePage] = useUpdatePageMutation()
  const [searchParams] = useSearchParams()

  const handleToggleSidebar = (e: KeyboardEvent) => {
    if (e.code === 'Backslash' && e.ctrlKey && !e.shiftKey) {
      e.preventDefault()
      toggleSidebar()
    }
  }

  const handleOpenQuickSearchModal = (e: KeyboardEvent) => {
    if (e.code === 'KeyP' && e.ctrlKey && !e.shiftKey) {
      e.preventDefault()
      toggleQuickSearchModal()
    }
  }

  const handleOpenAppSettingsModal = (e: KeyboardEvent) => {
    if (e.code === 'KeyO' && e.ctrlKey) {
      e.preventDefault()
      toggleAppSettingsModal()
    }
  }

  const handleToggleFavorite = (e: KeyboardEvent) => {
    const _id = currentPage?._id

    const isValid =
      currentPage?._id &&
      !searchParams.get('p') &&
      e.code === 'KeyF' &&
      e.ctrlKey &&
      e.altKey &&
      e.shiftKey

    if (isValid) {
      const body = {
        favorite: !currentPage.favorite,
        parentPageId: null,
        parentListId: null,
        status: null,
      }

      updatePage({ _id, body })
    }
  }

  useEventListener('keydown', handleToggleSidebar)
  useEventListener('keydown', handleOpenQuickSearchModal)
  useEventListener('keydown', handleOpenAppSettingsModal)
  useEventListener('keydown', handleToggleFavorite)

  return <>{children}</>
}

export default AppHotkeysWrapper
