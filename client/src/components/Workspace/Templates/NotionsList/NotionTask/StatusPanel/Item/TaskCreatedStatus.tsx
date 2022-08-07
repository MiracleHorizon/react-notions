import React, { FC, useRef } from 'react'
import { useHover } from 'usehooks-ts'

import ClipboardCopyButton from 'components/ui/buttons/ClipboardCopy'
import { ClockSvg } from 'components/ui/svg'
import * as Status from './StatusItem.styles'

const TaskCreatedStatus: FC<{ value: string }> = ({ value }) => {
  const ref = useRef<HTMLDivElement>(null)
  const isHovering = useHover(ref)

  return (
    <Status.Wrapper ref={ref}>
      <Status.Container>
        <Status.TitleContainer>
          <ClockSvg />
          <Status.Title>Date Created</Status.Title>
        </Status.TitleContainer>
        <Status.ValueContainer>
          <Status.Value>{value}</Status.Value>
        </Status.ValueContainer>
      </Status.Container>
      {isHovering && <ClipboardCopyButton value={value} />}
    </Status.Wrapper>
  )
}

export default TaskCreatedStatus
