import React, { FC } from 'react'

import PropTypes from './PageOptionsHotkeysWrapper.types'
import { useEventListener } from 'usehooks-ts'

const PageOptionsHotkeysWrapper: FC<PropTypes> = ({
  children,
  handleOpenRenameModal,
  handleOpenMovePageModal,
  handleOpenPageInNewTab,
  handleDeletePage,
}) => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.ctrlKey && e.shiftKey) {
      e.preventDefault()

      if (e.code === 'KeyR') handleOpenRenameModal()
      if (e.code === 'KeyP') handleOpenMovePageModal()
      if (e.code === 'Enter') handleOpenPageInNewTab()
    }

    if (e.code === 'Delete' && handleDeletePage) handleDeletePage()
  }

  useEventListener('keydown', handleKeyDown)

  return <>{children}</>
}

export default PageOptionsHotkeysWrapper
