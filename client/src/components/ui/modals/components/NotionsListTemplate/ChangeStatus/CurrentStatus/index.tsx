import React, { FC, memo } from 'react'

import { CloseThickSvg } from 'components/ui/svg'
import useInput from 'hooks/useInput'
import { useUpdatePageMutation } from 'store/slices/pages/pages.api'
import PropTypes from '../ChangeStatusModal.types'
import * as Status from './CurrentTaskStatus.styles'

const CurrentTaskStatus: FC<PropTypes> = memo(
  ({ task: { _id }, list: { title, color } }) => {
    const { value, handleChangeValue } = useInput('')
    const [updatePage] = useUpdatePageMutation()

    const handleDeleteStatus = () => {
      updatePage({ _id, body: { parentListId: null, status: 'NO_STATUS' } })
    }

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
