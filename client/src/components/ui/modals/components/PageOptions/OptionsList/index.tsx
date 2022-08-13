import React, { FC, memo, useRef } from 'react'
import { useCopyToClipboard } from 'usehooks-ts'

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
import {
  useDeletePageMutation,
  useUpdatePageMutation,
} from 'store/slices/pages/pages.api'
import PropTypes from './PageOptionsList.types'

const PageOptionsList: FC<PropTypes> = memo(({ page, coords }) => {
  const { _id, favorite } = page
  const renameRef = useRef<HTMLDivElement>(null)
  const [, handleCopy] = useCopyToClipboard()
  const { closePageOptionsModal, openRenamePageModal, openMovePageModal } =
    useActions()

  const [deletePage] = useDeletePageMutation()
  const [updatePage] = useUpdatePageMutation()

  const handleDelete = async () => {
    await deletePage(_id)
    closePageOptionsModal()
  }

  const handleOpenRenameModal = () => {
    const invokerRect = renameRef.current?.getBoundingClientRect().toJSON()
    openRenamePageModal({ invokerRect, page })
    closePageOptionsModal()
  }

  const handleToggleFavorite = async () => {
    await updatePage({ _id, body: { favorite: !favorite } })
    closePageOptionsModal()
  }

  const handleCopyLink = () => {
    handleCopy('Имя домена/workspace/' + _id).then(() =>
      closePageOptionsModal()
    )
  }

  const handleOpenMovePageModal = () => {
    openMovePageModal({ pageId: page._id, coords })
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
        title={page.favorite ? 'Remove from Favorites' : 'Add to Favorites'}
        StartSvg={page.favorite ? UnstarSvg : StarSvg}
        onClickAction={handleToggleFavorite}
      />
      <OptionItem
        title='Copy link'
        StartSvg={LinkSvg}
        onClickAction={handleCopyLink}
      />
      <OptionItem
        title='Rename'
        StartSvg={RenameSvg}
        onClickAction={handleOpenRenameModal}
        reference={renameRef}
      />
      <MovePageOption onClickAction={handleOpenMovePageModal} />
    </>
  )
})

export default PageOptionsList
