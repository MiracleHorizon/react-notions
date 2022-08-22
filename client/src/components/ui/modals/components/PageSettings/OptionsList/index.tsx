import React, { FC, memo } from 'react'
import { useCopyToClipboard } from 'usehooks-ts'
import { useSearchParams } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'

import OptionItem from 'components/ui/options/OptionItem'
import MovePageOption from 'components/ui/options/MovePage'
import {
  DeleteTrashSvg,
  LinkSvg,
  LockedSvg,
  StarSvg,
  UnlockedSvg,
  UnstarSvg,
} from 'components/ui/svg'
import useActions from 'hooks/useActions'
import {
  useMovePageToTrashMutation,
  useUpdatePageMutation,
} from 'services/pages.api'
import { selectRedirectPageId } from 'store/slices/app/app.selectors'
import PropTypes from './PageSettingsOptionsList.types'

const PageSettingsOptionsList: FC<PropTypes> = ({
  _id,
  favorite,
  locked,
  coords,
}) => {
  const {
    closePageSettingsModal,
    openMovePageModal,
    updatePageSettingsModalState,
  } = useActions()
  const [, handleCopy] = useCopyToClipboard()
  const redirectPageId = useSelector(selectRedirectPageId)
  const [searchParams, setSearchParams] = useSearchParams()
  const [movePageToTrash] = useMovePageToTrashMutation()
  const [updatePage] = useUpdatePageMutation()
  const navigate = useNavigate()

  const handleDeletePage = async () => {
    await movePageToTrash(_id)

    searchParams.get('p')
      ? setSearchParams('')
      : navigate(`workspace/${redirectPageId}`)
    closePageSettingsModal()
  }

  const handleToggleFavorite = async () => {
    const body = { parentPageId: null, favorite: !favorite }
    await updatePage({ _id, body })
    closePageSettingsModal()
  }

  const handleToggleLocked = () => {
    const body = { locked: !locked }
    updatePage({ _id, body })
    updatePageSettingsModalState(body)
  }

  const handleCopyLink = () => {
    handleCopy(window.location.href)
      .then(() => closePageSettingsModal())
      .catch(() => console.error('Ошибка копирования'))
  }

  const handleOpenMovePageModal = () => {
    openMovePageModal({ coords, pageId: _id })
    closePageSettingsModal()
  }

  return (
    <>
      <OptionItem
        title={locked ? 'Unlock page' : 'Lock page'}
        StartSvg={locked ? UnlockedSvg : LockedSvg}
        onClickAction={handleToggleLocked}
      />
      <OptionItem
        title={favorite ? 'Remove from Favorites' : 'Add to Favorites'}
        StartSvg={favorite ? UnstarSvg : StarSvg}
        onClickAction={handleToggleFavorite}
      />
      <OptionItem
        title='Copy link'
        StartSvg={LinkSvg}
        onClickAction={handleCopyLink}
      />
      <OptionItem
        title='Delete'
        StartSvg={DeleteTrashSvg}
        onClickAction={handleDeletePage}
      />
      <MovePageOption onClickAction={handleOpenMovePageModal} />
    </>
  )
}

export default PageSettingsOptionsList
