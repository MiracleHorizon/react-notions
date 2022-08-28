import { RefObject } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { useSearchParams } from 'react-router-dom'
import { useCopyToClipboard } from 'usehooks-ts'

import useActions from './useActions'
import useTypedSelector from './useTypedSelector'
import {
  useMovePageToTrashMutation,
  useUpdatePageMutation,
} from 'services/notions.api'
import { ElementCoords, SetState } from 'types'
import IPage from 'models/page/IPage'
import { selectRedirectPageId } from 'store/slices/app/app.selectors'
import { CLIENT_API } from 'utils/constants/app'

export type TPageOptionsDest = 'settings' | 'options'

interface Params {
  coords: ElementCoords
  page: IPage
  dest: TPageOptionsDest
  renameRef?: RefObject<HTMLDivElement>
  setSelectedItem?: SetState<any>
}

export enum PageActionsTypes {
  DELETE = 'Delete',
  RENAME = 'Rename',
  FAVORITE = 'Add to Favorites',
  SMALL_TEXT = 'Small text',
  FULL_WIDTH = 'Full width',
  UNFAVORITE = 'Remove from Favorites',
  LOCK = 'Lock page',
  UNLOCK = 'Unlock page',
  MOVE = 'Move to',
  COPY_LINK = 'Copy link',
  OPEN_IN_NEW_TAB = 'Open in new tab',
}

const usePageActions = ({
  renameRef,
  coords,
  page,
  dest,
  setSelectedItem,
}: Params) => {
  const { _id, favorite, locked, smallText, fullWidth } = page

  const {
    closePageOptionsModal,
    openRenamePageModal,
    openMovePageModal,
    closePageSettingsModal,
    showMovedToTrashTooltip,
    updatePageSettingsModalState,
  } = useActions()

  const [movePageToTrash] = useMovePageToTrashMutation()
  const [updatePage] = useUpdatePageMutation()

  const { page: currentPage } = useTypedSelector(s => s.notions)
  const { isActive: isMovedToTrashTooltipOpen } = useTypedSelector(
    s => s.alerts.movedToTrashTooltip
  )

  const [, handleCopy] = useCopyToClipboard()
  const [searchParams, setSearchParams] = useSearchParams()
  const redirectPageId = useSelector(selectRedirectPageId)
  const navigate = useNavigate()

  const handleDelete = () => {
    movePageToTrash(_id)

    if (dest === 'options') {
      if (_id === currentPage._id) {
        navigate(`/workspace/${redirectPageId}`)
      }
    } else {
      searchParams.get('p')
        ? setSearchParams('')
        : navigate(`/workspace/${redirectPageId}`)
    }

    if (!isMovedToTrashTooltipOpen) {
      showMovedToTrashTooltip(_id)
    }

    closePageOptionsModal()
    closePageSettingsModal()
  }

  const handleOpenRenameModal = () => {
    if (!page) return

    const invokerRect = renameRef?.current?.getBoundingClientRect().toJSON()
    openRenamePageModal({ invokerRect, page })
    closePageOptionsModal()
    closePageSettingsModal()
  }

  const handleToggleFullWidth = () => {
    const body = { fullWidth: !fullWidth }
    updatePage({ _id, body })
    updatePageSettingsModalState(body)
  }

  const handleToggleSmallText = () => {
    const body = { smallText: !smallText }
    updatePage({ _id, body })
    updatePageSettingsModalState(body)
  }

  const handleToggleFavorite = () => {
    updatePage({ _id, body: { favorite: !favorite } })
    closePageOptionsModal()
    closePageSettingsModal()
  }

  const handleToggleLocked = () => {
    const body = { locked: !locked }
    updatePage({ _id, body })
    updatePageSettingsModalState(body)

    if (setSelectedItem) {
      setSelectedItem(locked ? 'Lock page' : 'Unlock page')
    }
  }

  const handleCopyLink = () => {
    if (dest === 'options') {
      handleCopy(`${CLIENT_API}/workspace/${_id}`)
        .then(() => closePageOptionsModal())
        .catch(() => console.error('Ошибка копирования'))
    } else {
      handleCopy(window.location.href)
        .then(() => closePageSettingsModal())
        .catch(() => console.error('Ошибка копирования'))
    }
  }

  const handleOpenMovePageModal = () => {
    openMovePageModal({ pageId: _id, coords })
    closePageOptionsModal()
    closePageSettingsModal()
  }

  const handleOpenPageInNewTab = () => {
    window.localStorage.setItem('lastPageId', _id)
    window.open(`/workspace/${_id}`, '_blank')
    closePageOptionsModal()
    closePageSettingsModal()
  }

  const actionsReducer = (type: PageActionsTypes) => {
    switch (type) {
      case PageActionsTypes.DELETE:
        return handleDelete
      case PageActionsTypes.FULL_WIDTH:
        return handleToggleFullWidth
      case PageActionsTypes.SMALL_TEXT:
        return handleToggleSmallText
      case PageActionsTypes.FAVORITE:
        return handleToggleFavorite
      case PageActionsTypes.UNFAVORITE:
        return handleToggleFavorite
      case PageActionsTypes.LOCK:
        return handleToggleLocked
      case PageActionsTypes.UNLOCK:
        return handleToggleLocked
      case PageActionsTypes.COPY_LINK:
        return handleCopyLink
      case PageActionsTypes.MOVE:
        return handleOpenMovePageModal
      case PageActionsTypes.RENAME:
        return handleOpenRenameModal
      case PageActionsTypes.OPEN_IN_NEW_TAB:
        return handleOpenPageInNewTab
    }
  }

  return {
    actionsReducer,
    handleDelete,
    handleOpenRenameModal,
    handleToggleFullWidth,
    handleToggleSmallText,
    handleToggleFavorite,
    handleToggleLocked,
    handleCopyLink,
    handleOpenMovePageModal,
    handleOpenPageInNewTab,
  }
}

export default usePageActions
