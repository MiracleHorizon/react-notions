import React, { FC } from 'react'
import { useCopyToClipboard } from 'usehooks-ts'

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
  useDeletePageMutation,
  useUpdatePageMutation,
} from 'store/slices/pages/pages.api'
import PropTypes from './PageSettingsOptionsList.types'

const PageSettingsOptionsList: FC<PropTypes> = ({
  _id,
  template,
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
  const [deletePage] = useDeletePageMutation()
  const [updatePage] = useUpdatePageMutation()

  const handleDeletePage = async () => {
    await deletePage(_id)
    closePageSettingsModal()
  }

  const handleToggleFavorite = async () => {
    await updatePage({ _id, body: { parentPageId: null, favorite: !favorite } })
    closePageSettingsModal()
  }

  const handleToggleLocked = async () => {
    const body = { locked: !locked }
    await updatePage({ _id, body })
    updatePageSettingsModalState(body)
  }

  const handleCopyLink = () => {
    handleCopy(window.location.href).then(() => closePageSettingsModal())
  }

  const handleOpenMovePageModal = () => {
    openMovePageModal({ coords, pageId: _id })
    closePageSettingsModal()
  }

  return (
    <>
      {template === 'Notion' && (
        <OptionItem
          title={locked ? 'Unlock page' : 'Lock page'}
          StartSvg={locked ? UnlockedSvg : LockedSvg}
          onClickAction={handleToggleLocked}
        />
      )}
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
