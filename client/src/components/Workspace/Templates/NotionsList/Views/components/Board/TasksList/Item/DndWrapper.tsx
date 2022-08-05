import React, { FC, useMemo } from 'react'

import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import { useUpdateTasksListMutation } from 'store/slices/tasksLists/tasksLists.api'
import { useUpdatePageMutation } from 'store/slices/pages/pages.api'

import { IPage } from 'models/page/IPage'
import BoardItem from './index'

const dndWrapper = (WrappedComponent: FC<IPage>, props: IPage) => {
  return function () {
    const { startList, startItem } = useTypedSelector(state => state.tasksLists)
    const { setStartItem, setStartList } = useActions()

    const [updateTasksList] = useUpdateTasksListMutation()
    const [updatePage] = useUpdatePageMutation()

    const handleDragStart = () => {}

    const handleDragOver = () => {}

    const handleDragEnd = () => {}

    const handleDrop = () => {}

    const data = useMemo(() => {
      return {
        handleDragStart,
        handleDragOver,
      }
    }, [])

    return <WrappedComponent {...props} />
  }
}

export default dndWrapper

// {tasks.map(task => dndWrapper(BoardItem, task))}
