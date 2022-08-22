import React, { FC, memo, useRef } from 'react'
import { useCopyToClipboard } from 'usehooks-ts'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

import OptionItem from 'components/ui/options/OptionItem'
import MovePageOption from 'components/ui/options/MovePage'
import {
  DeleteTrashSvg,
  LinkSvg,
  RenameSvg,
  StarSvg,
  UnstarSvg,
} from 'components/ui/svg'
import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import {
  useMovePageToTrashMutation,
  useUpdatePageMutation,
} from 'services/pages.api'
import { selectRedirectPageId } from 'store/slices/app/app.selectors'
import { CLIENT_API } from 'utils/constants/app'
import PropTypes from './PageOptionsList.types'

const PageOptionsList: FC<PropTypes> = memo(({ page, coords }) => {
  const { _id, favorite, locked } = page
  const { closePageOptionsModal, openRenamePageModal, openMovePageModal } = useActions()
  const { page: currentPage } = useTypedSelector(s => s.pages)

  const [, handleCopy] = useCopyToClipboard()
  const redirectPageId = useSelector(selectRedirectPageId)
  const renameRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  const [movePageToTrash] = useMovePageToTrashMutation()
  const [updatePage] = useUpdatePageMutation()

  const handleDelete = async () => {
    await movePageToTrash(_id)
    if (_id === currentPage?._id) navigate(`/workspace/${redirectPageId}`)
    closePageOptionsModal()
  }

  const handleOpenRenameModal = () => {
    const invokerRect = renameRef.current?.getBoundingClientRect().toJSON()
    openRenamePageModal({ invokerRect, page })
    closePageOptionsModal()
  }

  const handleToggleFavorite = () => {
    updatePage({ _id, body: { favorite: !favorite } })
    closePageOptionsModal()
  }

  const handleCopyLink = () => {
    handleCopy(`${CLIENT_API}/workspace/${_id}`)
      .then(() => closePageOptionsModal())
      .catch(() => console.error('Ошибка копирования'))
  }

  const handleOpenMovePageModal = () => {
    openMovePageModal({ pageId: _id, coords })
    closePageOptionsModal()
  }

  return (
    <>
      <OptionItem
        title='Delete'
        StartSvg={DeleteTrashSvg}
        onClickAction={handleDelete}
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
      {!locked && (
        <OptionItem
          title='Rename'
          StartSvg={RenameSvg}
          onClickAction={handleOpenRenameModal}
          reference={renameRef}
        />
      )}
      <MovePageOption onClickAction={handleOpenMovePageModal} />
    </>
  )
})

export default PageOptionsList
