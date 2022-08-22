import React, { FC, memo, useCallback, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useEventListener } from 'usehooks-ts'

import OpenFullPageButton from 'components/ui/buttons/OpenFullPage'
import SwitchTaskButton from 'components/ui/buttons/SwitchTask'
import ToggleLockedButton from 'components/ui/buttons/ToggleLocked'
import useTypedSelector from 'hooks/useTypedSelector'
import {
  selectFilteredTasks,
  selectPagesByListId,
} from 'store/slices/pages/pages.selectors'
import IPage from 'models/page/IPage'
import Container from './SwitchTaskBar.styles'

// Лишние перерисовки.
const SwitchTaskBar: FC<IPage> = memo(({ _id, parentListId, locked }) => {
  const [reLock, setReLock] = useState<boolean>(false)
  const [, setSearchParams] = useSearchParams()

  const tasks = useTypedSelector(s => selectFilteredTasks(s, parentListId!))
  const parentListTasks = useTypedSelector(s => selectPagesByListId(s, parentListId!))
  const taskIndex = tasks.indexOf(tasks.find(page => page._id === _id)!)

  // useReducer или замыкание.
  const handleSwitchToNext = useCallback(
    (e?: KeyboardEvent) => {
      const tasksCount = parentListTasks.length

      if (taskIndex === tasksCount || taskIndex + 1 >= tasksCount) return
      const params = { p: tasks[taskIndex + 1]._id }

      if (!(e instanceof KeyboardEvent)) {
        setSearchParams(params)
        return
      }

      if (e.code === 'KeyJ' && e.altKey) {
        e.preventDefault()
        setSearchParams(params)
      }
    },
    [tasks, parentListTasks, taskIndex, setSearchParams]
  )

  const handleSwitchToPrevious = useCallback(
    (e?: KeyboardEvent) => {
      if (!parentListTasks || taskIndex === 0) return
      const params = { p: tasks[taskIndex - 1]._id }

      if (!(e instanceof KeyboardEvent)) {
        setSearchParams(params)
        return
      }

      if (e.code === 'KeyK' && e.altKey) {
        e.preventDefault()
        setSearchParams(params)
      }
    },
    [tasks, parentListTasks, taskIndex, setSearchParams]
  )

  useEventListener('keydown', handleSwitchToNext)
  useEventListener('keydown', handleSwitchToPrevious)

  return (
    <Container>
      <OpenFullPageButton _id={_id} />
      <SwitchTaskButton
        dest='prev'
        isActive={taskIndex > 0}
        onClickAction={handleSwitchToPrevious}
      />
      <SwitchTaskButton
        dest='next'
        isActive={taskIndex + 1 < tasks.length}
        onClickAction={handleSwitchToNext}
      />
      {(locked || reLock) && (
        <ToggleLockedButton
          _id={_id}
          locked={locked}
          reLock={reLock}
          setReLock={setReLock}
        />
      )}
    </Container>
  )
})

export default SwitchTaskBar
