import React, { FC, memo, useEffect, useRef } from 'react'

import { CloseThickSvg } from 'components/ui/svg'
import { useUpdatePageMutation } from 'store/slices/pages/pages.api'
import { IInputParams } from 'components/ui/inputs/input.types'
import PropTypes from '../ChangeStatusModal.types'
import * as Status from './CurrentTaskStatus.styles'

const CurrentTaskStatus: FC<PropTypes & IInputParams> = memo(
  ({ task: { _id }, list: { title, color }, value, handleChangeValue }) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const [updatePage] = useUpdatePageMutation()

    const handleDeleteStatus = () => {
      updatePage({ _id, body: { parentListId: null, status: 'NO_STATUS' } })
    }

    useEffect(() => {
      title === 'NO_STATUS' && inputRef.current?.focus()
    }, [title])

    return (
      <Status.Wrapper>
        {title !== 'NO_STATUS' ? (
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
