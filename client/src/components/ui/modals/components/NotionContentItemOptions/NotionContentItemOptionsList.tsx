import React, { FC, MutableRefObject, useCallback } from 'react'

import OptionItem from 'components/ui/options/OptionItem'
import MovePageOption from 'components/ui/options/MovePage'
import ChangesBar from 'components/ui/ChangesBar'
import Divider from 'components/ui/Divider'
import {
  ChevronDownSvg,
  ColorOptionSvg,
  DeleteTrashSvg,
  DuplicateSvg,
} from 'components/ui/svg'
import useActions from 'hooks/useActions'
import NotionContentItemTypes from 'models/pageContent/NotionContentItemTypes'
import {
  useCreateItemMutation,
  useDeleteItemMutation,
  useUpdateItemMutation,
} from 'store/slices/pages/pages.api'

const NotionContentItemOptionsList: FC<{
  _id: string
  type: NotionContentItemTypes
  rect: MutableRefObject<DOMRect | null>
}> = ({ _id, type, rect }) => {
  const {
    openNotionContentItemDecorModal,
    closeNotionContentItemOptionsModal,
  } = useActions()

  const [createContentItem] = useCreateItemMutation()
  const [updateContentItem] = useUpdateItemMutation()
  const [deleteContentItem] = useDeleteItemMutation()

  const handleDeleteItem = async () => {
    await deleteContentItem(_id)
    closeNotionContentItemOptionsModal()
  }

  const handleDuplicateItem = async () => {
    // await createContentItem()
    closeNotionContentItemOptionsModal()
  }

  const handleMoveItem = async () => {
    // await updateContentItem()
    closeNotionContentItemOptionsModal()
  }

  const handleOpenContentItemDecorModal = useCallback(() => {
    // closeNotionContentItemOptionsModal()
    const invokerRect = rect.current?.toJSON()
    openNotionContentItemDecorModal({ invokerRect, itemId: _id })
  }, [rect, _id])

  return (
    <>
      <OptionItem
        title='Delete'
        StartSvg={DeleteTrashSvg}
        onClickAction={handleDeleteItem}
      />
      <OptionItem
        title='Duplicate'
        StartSvg={DuplicateSvg}
        onClickAction={handleDuplicateItem}
      />
      <MovePageOption
        onClickAction={() => closeNotionContentItemOptionsModal()}
      />
      {type !== NotionContentItemTypes.DIVIDER && (
        <>
          <Divider />
          <OptionItem
            title='Color'
            StartSvg={ColorOptionSvg}
            EndSvg={ChevronDownSvg}
            onClickAction={handleOpenContentItemDecorModal}
            // onMouseOverAction={handleOpenContentItemDecorModal}
          />
        </>
      )}
      <ChangesBar createdAt='Hz kogda' updatedAt='Tozhe hz' />
    </>
  )
}

export default NotionContentItemOptionsList
