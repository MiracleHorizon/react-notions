import React, { FC, memo, useEffect, useRef } from 'react'

import { CloseThickSvg } from 'components/ui/svg'
import useTypedSelector from 'hooks/useTypedSelector'
import { useUpdatePageMutation } from 'services/notions.api'
import { TasksListsSelector } from 'store/slices/tasksLists/tasksLists.selectors'
import { IInputParams } from 'components/ui/inputs/types'
import { TasksListTitleColorsEnum } from 'models/decor/TasksListTitleColorsEnum'
import ITasksList from 'models/tasksList/ITasksList'
import IPage from 'models/page/IPage'
import * as Status from './CurrentTaskStatus.styles'

const CurrentTaskStatus: FC<
  {
    task: IPage
    list: ITasksList
  } & IInputParams
> = memo(
  ({ task: { _id }, list: { title, color }, value, handleChangeValue }) => {
    const [updatePage] = useUpdatePageMutation()
    const noStatusList = useTypedSelector(TasksListsSelector.selectNoStatusList)
    const inputRef = useRef<HTMLInputElement>(null)

    const handleDeleteStatus = () => {
      if (noStatusList) {
        const body = { parentListId: null, status: noStatusList._id }
        updatePage({ _id, body })
      }
    }

    useEffect(() => {
      color === TasksListTitleColorsEnum.EMPTY && inputRef.current?.focus()
    }, [color])

    return (
      <Status.Wrapper>
        {color !== TasksListTitleColorsEnum.EMPTY ? (
          <Status.Container bgColor={color}>
            <Status.Value>{title}</Status.Value>
            <Status.IconContainer onClick={handleDeleteStatus}>
              <CloseThickSvg />
            </Status.IconContainer>
          </Status.Container>
        ) : (
          <Status.SearchInput
            type='text'
            ref={inputRef}
            value={value}
            placeholder='Search for an list...'
            onChange={handleChangeValue}
          />
        )}
      </Status.Wrapper>
    )
  }
)

export default CurrentTaskStatus
