import React, { FC, MutableRefObject, useCallback } from 'react'

import OptionItem from 'components/ui/options/OptionItem'
import MovePageOption from 'components/ui/options/MovePage'
import ChangesBar from 'components/ui/ChangesBar - Checked'
import Divider from 'components/ui/Divider - Checked'
import {
  ChevronDownSvg,
  ColorOptionSvg,
  DeleteTrashSvg,
} from 'components/ui/svg'
import useActions from 'hooks/useActions'
import NotionContentItemTypes from 'models/pageContent/NotionContentItemTypes'
import {
  useDeleteItemMutation,
  useUpdateItemMutation,
} from 'services/pages.api'

const NotionContentItemOptionsList: FC<{
  _id: string
  type: NotionContentItemTypes
  rect: MutableRefObject<DOMRect | null>
  locked: boolean | undefined
}> = ({ _id, type, rect, locked }) => {
  const {
    openNotionContentItemDecorModal,
    closeNotionContentItemOptionsModal,
  } = useActions()
  const [updateContentItem] = useUpdateItemMutation()
  const [deleteContentItem] = useDeleteItemMutation()

  const handleDeleteItem = async () => {
    await deleteContentItem(_id)
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
  }, [rect, _id, openNotionContentItemDecorModal])

  return (
    <>
      {!locked && (
        <>
          <OptionItem
            title='Delete'
            StartSvg={DeleteTrashSvg}
            onClickAction={handleDeleteItem}
          />
        </>
      )}
      <MovePageOption
        onClickAction={() => closeNotionContentItemOptionsModal()}
      />
      {type !== NotionContentItemTypes.DIVIDER && !locked && (
        <>
          <Divider />
          <OptionItem
            title='Color'
            StartSvg={ColorOptionSvg}
            EndSvg={ChevronDownSvg}
            onClickAction={handleOpenContentItemDecorModal}
          />
        </>
      )}
      <ChangesBar createdAt='Hz kogda' updatedAt='Tozhe hz' />
    </>
  )
}

export default NotionContentItemOptionsList
