import { useCallback, useMemo, useReducer } from 'react'
import { URLSearchParamsInit, useSearchParams } from 'react-router-dom'

import useTypedSelector from './useTypedSelector'
import { NotionsSelector } from 'store/slices/notions/notions.selectors'
import IPage from 'models/page/IPage'

export interface SwitchState {
  params: { p: string }
}

export interface SwitchAction {
  type: SwitchActionKind
  payload: SwitchActionPayload
}

interface SwitchActionPayload {
  taskIndex: number
  tasks: IPage[]
  setSearchParams: (
    nextInit: URLSearchParamsInit,
    navigateOptions?: { replace?: boolean | undefined; state?: any } | undefined
  ) => void
  e?: KeyboardEvent
}

export enum SwitchActionKind {
  NEXT = 'next',
  PREVIOUS = 'previous',
}

const useSwitchTask = ({
  _id,
  parentListId,
}: {
  _id: string
  parentListId: string
}) => {
  const [, setSearchParams] = useSearchParams()
  const tasks = useTypedSelector(s =>
    NotionsSelector.selectListTasks(s, parentListId!)
  )
  const task = useMemo(() => tasks.find(page => page._id === _id), [tasks, _id])
  const taskIndex = task ? tasks.indexOf(task) : -1

  const isNextValid = taskIndex + 1 < tasks.length
  const isPrevValid = taskIndex > 0

  const initialSwitchState = useMemo(() => ({ params: { p: _id } }), [_id])
  const [, dispatch] = useReducer(switchTaskReducer, initialSwitchState)

  const handleSwitchToNext = useCallback(
    (e?: KeyboardEvent) => {
      dispatch({
        type: SwitchActionKind.NEXT,
        payload: { taskIndex, tasks, setSearchParams, e },
      })
    },
    [taskIndex, tasks, setSearchParams]
  )

  const handleSwitchToPrevious = useCallback(
    (e?: KeyboardEvent) => {
      dispatch({
        type: SwitchActionKind.PREVIOUS,
        payload: { taskIndex, tasks, setSearchParams, e },
      })
    },
    [taskIndex, tasks, setSearchParams]
  )

  return {
    isNextValid,
    isPrevValid,
    handleSwitchToNext,
    handleSwitchToPrevious,
  }
}

export default useSwitchTask

const switchTaskReducer = (state: SwitchState, action: SwitchAction) => {
  const {
    type,
    payload: { taskIndex, tasks, setSearchParams, e },
  } = action
  const tasksCount = tasks.length

  if (taskIndex === -1) return state

  switch (type) {
    case SwitchActionKind.NEXT: {
      if (taskIndex === tasksCount || taskIndex + 1 >= tasksCount) return state
      const params = { p: tasks[taskIndex + 1]._id }

      if (e instanceof KeyboardEvent) {
        if (e.code === 'KeyJ' && e.altKey) {
          e.preventDefault()
          setSearchParams(params)
        }
      } else {
        setSearchParams(params)
      }

      break
    }

    case SwitchActionKind.PREVIOUS: {
      if (taskIndex - 1 < 0) return state
      const params = { p: tasks[taskIndex - 1]._id }

      if (e instanceof KeyboardEvent) {
        if (e.code === 'KeyK' && e.altKey) {
          e.preventDefault()
          setSearchParams(params)
        }
      } else {
        setSearchParams(params)
      }

      break
    }
  }

  return state
}
