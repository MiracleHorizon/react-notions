import React, { FC, memo, MouseEvent, useRef } from 'react'
import { useHref } from 'react-router-dom'
import { useHover } from 'usehooks-ts'

import OptionsButton from 'components/ui/buttons/Options'
import useActions from 'hooks/useActions'
import setCoordsByPointer from 'utils/helpers/setCoordsByPointer'
import IPage from 'models/page/IPage'
import * as Item from './BoardItem.styles'

const BoardItem: FC<IPage> = memo(page => {
  const { title, iconUrl } = page
  const { openPageOptionsModal, openNotionTaskModal, setStartItem } =
    useActions()
  const ref = useRef<HTMLDivElement>(null)
  const isHovering = useHover(ref)
  const href = useHref('')

  const handleDragStart = () => {
    // setStartList(parentList)
    setStartItem(page)
  }

  const handleOpenOptionsModal = (e: MouseEvent) => {
    e.stopPropagation()
    openPageOptionsModal({ coords: setCoordsByPointer(e), page })
  }

  const handleOpenFullWidthTask = () => openNotionTaskModal(page)

  return (
    <Item.Wrapper
      ref={ref}
      draggable
      onClick={handleOpenFullWidthTask}
      onDragStart={handleDragStart}
    >
      <Item.Container>
        {iconUrl && <Item.Icon src={iconUrl} />}
        <Item.Title>{title === '' ? 'Untitled' : title}</Item.Title>
        {/*<BoardItemTitle title={title} />*/}
      </Item.Container>
      {isHovering && (
        <OptionsButton
          size='medium'
          type='outlined'
          onClickAction={handleOpenOptionsModal}
        />
      )}
    </Item.Wrapper>
  )
})

export default BoardItem

// import useTypedSelector from 'hooks/useTypedSelector'
// import { useUpdateTasksListMutation } from 'store/slices/tasksLists/tasksLists.api'
// import { useUpdatePageMutation } from 'store/slices/pages/pages.api'

// const parentList = useTypedSelector(state =>
//   state.tasksLists.tasksLists.filter(list => list._id === page.parentListId)
// )[0]

// Попробовать компонент высшего порядка.
// const [updateTasksList] = useUpdateTasksListMutation()
// const [updatePage] = useUpdatePageMutation()
// const { startList, startItem } = useTypedSelector(state => state.tasksLists)
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

// onDragLeave={handleDragEnd}
// onDragEnd={handleDragEnd}
// onDragOver={handleDragOver}
// onDrop={handleDrop}

// const navigate = useNavigate()
// const handleDoubleClick = () => navigate(`${href}/task/${page._id}`)
// onDoubleClick={handleDoubleClick}
