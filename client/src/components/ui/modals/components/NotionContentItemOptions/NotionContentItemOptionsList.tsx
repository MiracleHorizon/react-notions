import React, { FC, MutableRefObject, useCallback, lazy, Suspense } from 'react'

import OptionItem from 'components/ui/options/OptionItem'
import ChangesBarLoader from 'components/ui/loaders/ChangesBar'
import Divider from 'components/ui/Divider'
import {
  ChevronDownSvg,
  ColorOptionSvg,
  DeleteTrashSvg,
} from 'components/ui/svg'
import useActions from 'hooks/useActions'
import INotionContentItem from 'models/pageContent/INotionContentItem'
import NotionContentItemTypes from 'models/pageContent/NotionContentItemTypes'
import {
  useDeleteItemMutation,
  useUpdateItemMutation,
} from 'services/notions.api'

const ChangesBar = lazy(() => import('components/ui/ChangesBar'))

const NotionContentItemOptionsList: FC<{
  rect: MutableRefObject<DOMRect | null>
  locked: boolean | undefined
  item: INotionContentItem
}> = ({ item: { _id, type, createdAt, updatedAt }, rect, locked }) => {
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

  const handleOpenMoveToModal = async () => {
    // await updateContentItem({ _id, body: {parentPageId} })
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
      {/*<MovePageOption*/}
      {/*  locked={locked}*/}
      {/*  onClickAction={() => closeNotionContentItemOptionsModal()}*/}
      {/*/>*/}
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
      <Suspense fallback={<ChangesBarLoader />}>
        <ChangesBar createdAt={createdAt} updatedAt={updatedAt} />
      </Suspense>
    </>
  )
}

export default NotionContentItemOptionsList
