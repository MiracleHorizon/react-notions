import React, { FC } from 'react'
import { useEventListener } from 'usehooks-ts'

import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import { useUpdatePageMutation } from 'store/slices/pages/pages.api'

const HotkeysWrapper: FC<{ children: JSX.Element }> = ({ children }) => {
  const { page } = useTypedSelector(state => state.pages)
  const [updatePage] = useUpdatePageMutation()
  const {
    toggleLeftSidebar,
    toggleRightSidebar,
    toggleQuickSearchModal,
    toggleAppSettingsModal,
  } = useActions()

  const handleToggleLeftSidebar = (e: KeyboardEvent) => {
    if (e.code === 'Slash' && e.ctrlKey && !e.shiftKey) {
      e.preventDefault()
      toggleLeftSidebar()
    }
  }

  const handleToggleRightSidebar = (e: KeyboardEvent) => {
    if (
      e.code === 'Slash' &&
      e.ctrlKey &&
      e.shiftKey &&
      page?.template === 'Notion'
    ) {
      e.preventDefault()
      toggleRightSidebar()
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
    if (page && e.code === 'KeyF' && e.ctrlKey && e.altKey && e.shiftKey) {
      updatePage({ _id: page._id, body: { favorite: !page.favorite } })
    }
  }

  useEventListener('keydown', handleToggleLeftSidebar)
  useEventListener('keydown', handleToggleRightSidebar)
  useEventListener('keydown', handleOpenQuickSearchModal)
  useEventListener('keydown', handleOpenAppSettingsModal)
  useEventListener('keydown', handleToggleFavorite)

  return <>{children}</>
}

export default HotkeysWrapper
