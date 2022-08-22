import React, { FC, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useEventListener } from 'usehooks-ts'

import ModalsOverlay from 'components/ui/modals/ModalsOverlay'
import AlertsOverlay from 'components/ui/alerts - Checked/AlertsOverlay'
import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import { useUpdatePageMutation } from 'services/pages.api'

const AppHotkeysWrapper: FC<{ children: JSX.Element }> = ({ children }) => {
  const { page: currentPage } = useTypedSelector(s => s.pages)
  const { savePage: isSavePageLoading } = useTypedSelector(s => s.app.loadings)
  const [updatePage, { isLoading }] = useUpdatePageMutation()
  const [searchParams] = useSearchParams()
  const {
    toggleQuickSearchModal,
    toggleAppSettingsModal,
    toggleSidebar,
    setSavePageLoading,
  } = useActions()

  const handleSavePageChanges = (e: KeyboardEvent) => {
    const _id = searchParams.get('p') ? searchParams.get('p') : currentPage?._id

    // const body =

    if (_id && e.code === 'KeyS' && e.ctrlKey && !isSavePageLoading) {
      e.preventDefault()
      setSavePageLoading(true)
      // updatePage({ _id, body: { ...currentPage } }) //!
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
    const _id = currentPage?._id

    if (
      _id &&
      !searchParams.get('p') &&
      e.code === 'KeyF' &&
      e.ctrlKey &&
      e.altKey &&
      e.shiftKey
    ) {
      const body = {
        favorite: !currentPage.favorite,
        parentPageId: null,
        parentListId: null,
        status: null,
      }

      updatePage({ _id, body })
    }
  }

  useEffect(() => {
    if (!isLoading) setSavePageLoading(false)
  }, [isLoading, setSavePageLoading])

  useEventListener('keydown', handleSavePageChanges)
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
