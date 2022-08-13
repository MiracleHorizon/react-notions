import React, { FC } from 'react'
import { useEventListener } from 'usehooks-ts'

import ModalsOverlay from 'components/ui/modals/ModalsOverlay'
import AlertsOverlay from 'components/ui/alerts/AlertsOverlay'
import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import { useUpdatePageMutation } from 'store/slices/pages/pages.api'

const AppHotkeysWrapper: FC<{ children: JSX.Element }> = ({ children }) => {
  const { page: currentPage } = useTypedSelector(state => state.pages)
  const { page: task } = useTypedSelector(state => state.modals.notionTask)
  const [updatePage] = useUpdatePageMutation()
  const { toggleQuickSearchModal, toggleAppSettingsModal, toggleSidebar } =
    useActions()

  const handleSavePageChanges = (e: KeyboardEvent) => {
    if (currentPage && e.code === 'KeyS' && e.ctrlKey) {
      e.preventDefault()
      updatePage({ _id: currentPage._id, body: { ...currentPage } })
    }
  }

  const handleToggleSidebar = (e: KeyboardEvent) => {
    if (e.code === 'Slash' && e.ctrlKey && !e.shiftKey) {
      e.preventDefault()
      toggleSidebar()
    }
  }

  const handleOpenQuickSearchModal = (e: KeyboardEvent) => {
    if (e.code === 'KeyP' && e.ctrlKey) {
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
    const page = task ? task : currentPage

    if (page && e.code === 'KeyF' && e.ctrlKey && e.altKey && e.shiftKey) {
      const body = {
        favorite: !page.favorite,
        parentPageId: null,
        parentListId: null,
        status: null,
      }

      updatePage({ _id: page._id, body })
    }
  }

  // useEventListener('keydown', handleSavePage())
  useEventListener('keydown', handleToggleSidebar)
  useEventListener('keydown', handleOpenQuickSearchModal)
  useEventListener('keydown', handleOpenAppSettingsModal)
  useEventListener('keydown', handleToggleFavorite)

  return (
    <>
      {children}
      <ModalsOverlay />
      <AlertsOverlay />
    </>
  )
}

export default AppHotkeysWrapper
