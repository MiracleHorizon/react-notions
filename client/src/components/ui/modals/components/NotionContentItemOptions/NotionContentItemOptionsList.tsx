import React, { FC, MutableRefObject, useCallback } from 'react'

import OptionItem from 'components/ui/options/OptionItem'
import MovePageOption from 'components/ui/options/MovePage'
import ChangesBar from 'components/ui/ChangesBar'
import Divider from 'components/ui/Divider'
import {
  ColorOptionSvg,
  DeleteTrashSvg,
  DuplicateSvg,
  ChevronDownSvg,
} from 'components/ui/svg'
import useActions from 'hooks/useActions'
import {
  useCreateItemMutation,
  useDeleteItemMutation,
  useUpdateItemMutation,
} from 'store/slices/pages/pages.api'

const NotionContentItemOptionsList: FC<{
  itemId: string
  rect: MutableRefObject<DOMRect | null>
}> = ({ itemId, rect }) => {
  const {
    openNotionContentItemDecorModal,
    closeNotionContentItemOptionsModal,
  } = useActions()

  const [createContentItem] = useCreateItemMutation()
  const [updateContentItem] = useUpdateItemMutation()
  const [deleteContentItem] = useDeleteItemMutation()

  const handleDeleteItem = async () => {
    await deleteContentItem(itemId)
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
    openNotionContentItemDecorModal({
      invokerRect: rect.current?.toJSON(),
      itemId,
    })
  }, [rect, itemId])

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
      <Divider />
      <OptionItem
        title='Color'
        StartSvg={ColorOptionSvg}
        EndSvg={ChevronDownSvg}
        onClickAction={handleOpenContentItemDecorModal}
        // onMouseOverAction={handleOpenContentItemDecorModal}
      />
      <ChangesBar author='' updatedAt='HZ Kogda' />
    </>
  )
}

export default NotionContentItemOptionsList
