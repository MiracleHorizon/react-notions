import React, { DragEvent, FC, memo, MouseEvent, useRef } from 'react'
import { Link, useHref } from 'react-router-dom'
import { useHover } from 'usehooks-ts'

import OptionsButton from 'components/ui/buttons/Options'
import CommentsInfo from 'components/Workspace/Templates/NotionsList/Views/CommentsInfo'
import useActions from 'hooks/useActions'
import { setCoordsByPointer } from 'helpers/setCoordsByPointer'
import { IPage } from 'models/page/IPage'
import * as Item from './BoardItem.styles'

import useTypedSelector from 'hooks/useTypedSelector'
import { useUpdateTasksListMutation } from 'store/slices/tasksLists/tasksLists.api'
import { useUpdatePageMutation } from 'store/slices/pages/pages.api'

const BoardItem: FC<IPage> = memo(page => {
  const { title, iconUrl, comments } = page
  const { openPageOptionsModal } = useActions()
  const ref = useRef<HTMLDivElement>(null)
  const isHovering = useHover(ref)
  const href = useHref('')

  const handleOpenOptionsModal = (e: MouseEvent) => {
    e.preventDefault()
    openPageOptionsModal({ coords: setCoordsByPointer(e), page })
  }

  // const parentList = useTypedSelector(state =>
  //   state.tasksLists.tasksLists.filter(list => list._id === page.parentListId)
  // )[0]

  // Попробовать компонент высшего порядка.

  // const [updateTasksList] = useUpdateTasksListMutation()
  // const [updatePage] = useUpdatePageMutation()
  const { setStartItem, setStartList } = useActions()
  // const { startList, startItem } = useTypedSelector(state => state.tasksLists)
  //

  const handleDragStart = (e: DragEvent<HTMLDivElement>) => {
    // setStartList(parentList)
    setStartItem(page)
  }

  //
  // const handleDragEnd = () => {}
  //
  // const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
  //   e.preventDefault()
  // }
  //
  // const handleDrop = async (e: DragEvent<HTMLDivElement>) => {
  //   if (!startList || !startItem || startList._id === parentList._id) return
  //
  //   await updatePage({
  //     _id: startItem._id,
  //     body: {
  //       parentListId: parentList._id,
  //       taskOrder: parentList.dependencies.length,
  //     },
  //   })
  //
  //   const dependencies = startList.dependencies.filter(
  //     id => id !== startItem._id
  //   )
  //   await updateTasksList({ _id: startList._id, body: { dependencies } })
  //
  //   e.preventDefault()
  // }

  return (
    // <Link to={`${href}/task/${page._id}`}>
    <Item.Wrapper
      ref={ref}
      draggable
      onDragStart={handleDragStart}
      // onDragLeave={handleDragEnd}
      // onDragEnd={handleDragEnd}
      // onDragOver={handleDragOver}
      // onDrop={handleDrop}
    >
      <Item.Container>
        {iconUrl && <Item.Icon src={iconUrl} />}
        <Item.Title>{title === '' ? 'Untitled' : title}</Item.Title>
        {comments.length > 0 && <CommentsInfo count={comments.length} />}
      </Item.Container>
      {isHovering && (
        <OptionsButton
          size='medium'
          type='outlined'
          onClickAction={handleOpenOptionsModal}
        />
      )}
    </Item.Wrapper>
    // </Link>
  )
})

export default BoardItem
